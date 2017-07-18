const express = require('express');
const Cloudant = require('cloudant');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

var me = 'cavaloni'; // Set this to your own account
var password = process.env.password;

var cloudant = Cloudant({
  account: me,
  password: password
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/dist'));

app.post('/create', (req, res) => {
  const user = req.body.user;
  cloudant.db.create(user, (err, x, y) => {
    console.log('db created')

    if (err) {
      console.log(err)
      res.sendStatus(300)
      return
    }

    var security = {
      nobody: [],
      [user]: ['admin']
    };

    var my_database = cloudant.db.use(user);
    my_database.set_security(security, function (er, result) {
      if (er) {
        throw er;
      }

      console.log('Set security for ' + user);
      console.log(result);
    });

    cloudant.auth(user, req.body.password, (err, body, headers) => {
      // set password for user ---- not working
    })
  });
})

app.get('/login', (req, res) => {

})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});


app.listen(process.env.PORT || 8080);
