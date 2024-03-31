import { MongoClient } from "mongodb";

const USERNAME = "user64bit";
const PASSWORD = "UXnc7boDzMz3HSjt";
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
