var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var path = require('path')
var mongoose = require('mongoose');
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use (
    bodyParser.urlencoded({extended: false})
)

require('dotenv').config(); // to read .env file

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"))
    })
}

const mongoURI = process.env.ATLAS_URI;

mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DataBase connected to the server'))
    .catch(err => console.log(err))

     
var Users = require('./routes/Users')
//var Search= require('./routes/search')

app.use('/users', Users)
///app.use('/search',Search)


const User = require('./models/User');
app.get("/search", function(req, res)  {
    var toSearch= req.body
    console.log(toSearch)
     User.find(toSearch,function(err, data)  {
         if(err){
             throw err;
         }
         res.json(data);
     });
 });







app.listen(port, () => {
    console.log(`Server is running on ${port} Visit https://localhost:${port}`)
})