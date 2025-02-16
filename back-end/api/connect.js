import { MongoClient } from 'mongodb';
const URI = "mongodb+srv://MongoGommez:willmeucachorro@cluster0.gndtg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyHashtag")
// const songCollection = await db.collection('songs').find({}).toArray()

// console.log(songCollection)