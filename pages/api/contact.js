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

    try {
      client = await MongoClient.connect(
        "mongodb+srv://harryHerdiana:5zh6GO54C3YFMKXD@cluster0.eiszg.mongodb.net/nextBlog?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
    }
    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "storing data failed!" });
    }
    client.close();
  }
}

export default handler;
