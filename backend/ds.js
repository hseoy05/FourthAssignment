const {MongoClient} = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function getUsers () {
    try {
        await client.connect();

        const db = client.dv("board");
        const users = db.collection("users");
        const result = await users.find().toArray();

        console.log(result);
    } catch (err){
        console.error(err);
    } finally {
        await client.close();
    }
}

getUsers();