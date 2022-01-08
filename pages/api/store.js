import { MongoClient } from "mongodb";
const uri = `mongodb+srv://client:${process.env.mongo_password}@maincluster.iszy6.mongodb.net/data?retryWrites=true&w=majority`;
export default async function handler(req, res) {
  // Validate the query
  const body = JSON.parse(req.body);
  if (!("question_id" in body) || !("response" in body)) {
    res.status(400).json({ status: "Missing POST body parameters" });
    return;
  }

  const client = new MongoClient(uri);

  try {
    // Connect to the database
    await client.connect();
    // Package and send the result to the database
    await client.db("data").collection("responses").insertOne({
      question_id: body.question_id,
      response: body.response,
    });

    res.status(200).json({ status: "Logged successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: e.message });
  } finally {
    await client.close();
  }
}
