
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dawnmist:coolswapnil1@dmdatabase-snyy6.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
global.collection=null
// async function InitCollection(err)
// {
//         global.collection = client.db("hopeDB").collection("access");
//        // perform actions on the collection object
//        var myobj = { name: "Arpit", address: "Kill Obama", house:["Bin Laden", ""], decription:" Atankwadi in the north, The Protector of Realm, Lord Commandere of The Night's Watch, True heir to the Iron Throne"
//       ,weapon:{name:'The Long Claw',type:'Sword',specification:'Valariyan Steel'},parents:'Rhaegar Targaryen & Lyana Stark' };
//       // console.log(collection);
//     //     collection.insertOne(myobj,(err,result)=>{
//     //      if  (err) throw err;
//     //     //console.log("Inserted")
//     //   })
//        var query={address:'Kill Obama'}
       
//      //console.log(global.collection);
//      global.collection.find({}).toArray(function(err,result){
//          if (err) throw err;
//         // console.log(result);
     
//        })
//        console.log(global.collection)
// }
client.connect();
async function connect()
{
    await client.connect()
    global.collection = client.db("hopeDB").collection("access"); 
    return
}
async function storeObject(object)
{
    console.log('storing..',object)
    if(!collection)await connect()
    await collection.insertOne(object)
}

var myobj = { name: "Dm", address: "Kill Obama", house:["Bin Laden", ""], decription:" Atankwadi in the north, The Protector of Realm, Lord Commandere of The Night's Watch, True heir to the Iron Throne"
      ,weapon:{name:'The Long Claw',type:'Sword',specification:'Valariyan Steel'},parents:'Rhaegar Targaryen & Lyana Stark' };
 //storeObject(myobj)

  function chunkdata(){
     let count=20
     let uid='';
    let sno=0;
    let uname;
    while (count)
    {
        sno=sno+1
        uid=Math.random().toString(36).substr(2,9);
        uname='DawnMist'+uid;
        var obj={num:sno, name:`${uname}`, userid:uid}
        count=count-1;
        storeObject(obj);
    }
     
 }
 //chunkdata();
async function sort()
{
    if(!collection)await connect()
    let sort={num:1};
    collection.find().sort(sort).toArray(function(err,result)
    {
        if (err) throw err;
        console.log(result);
    })
}

  sort();  

     
