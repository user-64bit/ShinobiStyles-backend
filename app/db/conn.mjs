import { MongoClient } from "mongodb";

const USERNAME = process.env.MONGO_DB_USERNAME;
const PASSWORD = process.env.MONGO_DB_PASSWORD;
const connectionString = `mongodb+srv://${USERNAME}:${PASSWORD}@ss-main.bvztuon.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(connectionString);
let conn;
try {
    conn = await client.connect();
} catch {
    console.log("fuck you bitch...");
}

let db = conn.db("Shinobi_Styles0");
export default db;
