const MongoClient = require("mongodb").MongoClient;
    


function QueryRecord (dbName,dbCollection,query){

  const url = global.env.LOCALDB_URI;

MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true },(err, db) =>{
  if (err) throw err;
  const dbo = db.db(dbName);
  const dbQuery = query;
  dbo.collection(dbCollection).find(dbQuery).toArray((err, result) =>{
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 
}

const dbName="RIPTA";
const dbCollection="stops";
const query={stop_id: '51'}; 
QueryRecord(dbName,dbCollection,query);