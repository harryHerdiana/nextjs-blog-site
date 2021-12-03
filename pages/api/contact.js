import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({
        message: "Invalid Input",
      });
      return;
    }
    const newMessage = {
      email,
      message,
      name,
    };
    let client;

    const connectionString = `mongodb+srv://${process.env.mongodbUser}:${process.env.mongeodbPass}@${process.env.mongodbCluster}.eiszg.mongodb.net/${process.env.mongodbDatabase}?retryWrites=true&w=majority`

    try {
      client = await MongoClient.connect(
        connectionString
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return
    }
    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "storing data failed!" });
      return
    }
    client.close();
    res.status(201).json({message:"Successfully stored message!",message:newMessage})
  }
}

export default handler;
