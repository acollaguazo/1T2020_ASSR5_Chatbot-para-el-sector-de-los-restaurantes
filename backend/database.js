const mongoose=require('mongoose')
const uri='mongodb+srv://restaurant:70IuZAIRtY7a6Tya@cluster0.w68qc.mongodb.net/restaurante_db?retryWrites=true&w=majority'
const db=mongoose.connection;
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

db.on('open',__dirname=>{
    console.log('Database is connect to',uri);
})

db.on('error',err=>{
    console.log(err)
})





















/*
const mongo = require('mongodb');
const Server = mongo.Server,
 Db = mongo.Db,
BSON = mongo.BSONPure;
const server = new Server('127.0.0.1', 27017, {auto_reconnect: true});
const db=new Db('restaurante',server);
const collection=db.collection('documents');
db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'restaurante' database");
        db.collection('menu', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'wines' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

exports.findAll = function(req, res) {
    db.collection('menu', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};
*/