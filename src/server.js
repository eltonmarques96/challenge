const express = require("express");
const router = express.Router();
var cors = require("cors");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Form', {
  useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connection Done")
});

const Details = new mongoose.Schema({
    name: String,
    pid: String,
    date: String,
    subject: String,
    message:String,
    attachment:Object
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3001, () => console.log("Server Running"));

app.post('/api/send', (req, res, next) => {
    var detailsModel = mongoose.model('details', Details);
    var details = new detailsModel(req.body);
    details.save(function (err) {
      if (err) {
        res.send("Error ", err);
      } else {
        res.send("Data Saved");
        res.redirect('/');
      }
    })
})

app.post('/api/uploadfile', (req, res, next) => {
  var detailsModel = mongoose.model('details', Details);
  var details = new detailsModel(req.body.attachment);
  details.save(function (err) {
    if (err) {
      res.send("Error ", err);
    } else {
      res.send("Data Saved");
    }
  })
})

app.get('/api/history', (req, res, next) => {
  var detailsModel = mongoose.model('details', Details);
  var details = new detailsModel(req.body);
  details.save(function (err) {
    if (err) {
      res.send("Error ", err);
    } else {
      res.send("Data Stored");
    }
  })
})