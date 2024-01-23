import db from "../db/conn.mjs";

//  Add key:value to collection (make sure you are using right db)
let key = "";
let value = "";
let collection = "";
async function update() {
    let collection = db.collection(collection);

    try {
        await collection.updateMany({}, { $set: { key: value } });
        console.log("Updation Successful!");
        process.exit(0);
    } catch (error) {
        console.error("Updation Failed:", error);
        process.exit(1);
    }
}

update();
