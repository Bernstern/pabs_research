#!/usr/bin/env python
# -*- coding: utf-8 -*-

import argparse 
from os.path import exists
import subprocess
import sys
import csv

def install(package):
    # Installs a given package using pip
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    from pymongo import MongoClient
except ImportError:
    # Try to download all the packages we need to connect to the database
    print("Making sure we have all the packages needed to connect to the database...")
    install("pymongo[srv]")
    from pymongo import MongoClient

def main():
    # Use argparse to get the path of the x509 file
    parser = argparse.ArgumentParser()
    parser.add_argument("--path", help="Path to the x509 file")
    args = parser.parse_args()

    # If the path is not specified, use the default path
    if args.path is None:
        print("Path not specified, trying default path for x509 certificate.")
        path = "pauline.pem"
    else:
        path = args.path

    # Check that the x509 exists - if it doesn't exit out
    if not exists(path):
        print("x509 certificate does not exist, please run with -h for help.")
        exit(1)

    # Make sure we can connect to the db
    uri = "mongodb+srv://maincluster.iszy6.mongodb.net/dataco?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority"
    client = MongoClient(uri,
                         tls=True,
                         tlsCertificateKeyFile=path)

    print("Connected to the database, fetching all responses and aggregating...")

    # Get everything in the responses collection
    db = client.data
    collection = db["responses"]
    cursor = collection.find({})

    results = []
    for document in cursor:
        results.append({"question_id": document["question_id"], "response": document["response"]})

    print(f"Found {len(results)} responses, creating a csv.")
    
    # Create a csv with the results
    with open("results.csv", "w") as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=["question_id", "response"])
        writer.writeheader()
        writer.writerows(results)

    print("Done.")

if __name__ == '__main__':
    main()