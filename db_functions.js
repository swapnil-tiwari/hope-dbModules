// require('./db_init');
debugger;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dawnmist:coolswapnil1@dmdatabase-snyy6.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, {
    useNewUrlParser: true
});
global.collection = null
global.connection = null;
global.db = null;
global.collection = null;
//client.connect();
async function connect(dnname) {
    
    return db;
}
async function getCollection(collectionName) {
    if (!connection) {
        await connect();
    }
    global.collection = client.db('hopeDB').collection(collectionName)
}
async function storeObject(object) {
    console.log('storing..', object)
    if (!collection) await connect();
    await getCollection('masterUser')
    await collection.insertOne(object)
}
async function createIndexes() {
    console.log("Creating Index");
    await db.createIndex({
        id: "string",
        unique: true
    });

}
let dawnmist = {
    username: 'DawnMist',
    id: '110599zdwokuh67',
    key: '5982776464b2533a0bd175fd4ec4bdd5540a6552c50e0e7501a5109b709cf6c1',
    alias: 'Swapnil Tiwari',
    permission: 'alltrue',
    level: 'master'

}
storeObject(dawnmist)
// createIndex();
async function retrier(coll,fun,arg,retryCount=2)
{    
    while(retryCount>=0)
        try
        {
            console.info("Intitating query..");
            return  await coll[fun](...arg)
        }
        catch(e)
        {
            if(retryCount==0)
            {   
                throw "I failed after retrying"
            }
            console.error("Failed! Retrying "+(retryCount--)+" more time");      
        }
}
async function CollAccessor(dbname,cname=undefined)
{
   var db,coll;
   var connect=async(cname)=>{
        await client.connect()
        db = client.db(dbname)
        console.log("Connected with db:" +dbname+' collection:'+cname)
        coll=db.collection(cname)
    }
    var cacc= async(cname)=>{
        var res= {    
            find:(...arg)=>retrier(coll,'find',arg),
            updateOne:(...arg)=>retrier(coll,'updateOne',arg),
            findOne:(...arg)=>retrier(coll,'findOne',arg),
            insertOne:(...arg)=>retrier(coll,'insertOne',arg),
            retry:()=>connect(cname)
        }
        await connect(cname);
        return res;
    }
    if(cname!=undefined)return cacc(cname)
    else return cacc
}
global.db=CollAccessor('hopeDB','masterUser')
class dAccessor {

    constructor() {
     client.connect()
        this.connection = true;
        this.db = client.db('hopeDB')
        console.log("Connected with cluster")
    
    }
     find(...args) {
        return this.find(...args);
    }


}
process.on('unhandledRejection',()=>{})