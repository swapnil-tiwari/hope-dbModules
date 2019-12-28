
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dawnmist:coolswapnil1@dmdatabase-snyy6.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
global.collection=null
global.connection=null;
global.db=null;
client.connect();
async function connect()
{
    await client.connect()
    global.connection=true;
    global.db=client.db('hopeDB')
    console.log("Connected with cluster")
    return
}
async function createCollection(collectionName)
{
    if(!connection) 
    {
        await connect();
    }
    db.createCollection(collectionName,console.log('Collection Created'))

}
createCollection('masterUser')