var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
// Test
var app = express();

const route = require('./route/routes');

mongoose.connect('mongodb://localhost:27017/productmanagement');

mongoose.connection.on('connected',() =>{
	console.log("connected to mongodb at port 27017");
});
mongoose.connection.on('error',(err)=>{
	console.log(err);
});

app.get('/', (req, res)=>{
	res.send("some changes");
});

app.use(cors());
app.use(bodyParser.json());
app.use('/api', route);

const PORT = 4000;
app.listen(PORT,()=>{
	console.log("node server started at 4000")
});