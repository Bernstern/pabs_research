# P&BS Research Chatbot

![UCSB Wordmark](images/ucsb_wordmark.png)

This is a project done for a honors research project conducted by Pauline Yang for PSY 197 at UCSB. This chatbot and related tools was created by Bernie Conrad and Ori Mizrahi (01/2022).

## Running the front end locally

To run the front end locally you need to have node and npm installed (see [this](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/) to get started), in this directory you just need to run:

```bash
npm i
npm run dev
```

To launch the webpage in your local browser.

## Pulling responses from the database

If you want to pull all the responses from the database you can use the `download.py` script in the scripts directory. Note that this requires having the x509 certificate to access to the database.

If the certificate is in your local directory just run:

```bash
python3 scripts/download.py
```

If it is not run:

```bash
python3 scripts/download.py --path <path to the .pem>
```

This script will automatically download any python packages needed to interact with the db. Once it is done there will be a spreadsheet called `results.csv` in your local directory you can open in excel!

## Troubleshooting

If there are any errors with users interacting with the chatbot or issues pulling the responses from the database, please notify us immediately, the faster we know about any bugs the less downtime there is.
