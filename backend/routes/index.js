var express = require('express');
var mysql = require('mysql');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




// Connection 객체 생성 
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',   
  password: '1234',
  database: 'test_crud'  
});  
// Connect
connection.connect(function (err) {   
  if (err) {     
    console.error('mysql connection error');     
    console.error(err);     
    throw err;   
  } 
});

router.post('/regist', function (req, res) {
  var user = {
    'userid': req.body.userid,
    'name': req.body.name,
    'password': req.body.password
  };
  var query = connection.query('insert into users set ?', user, function (err, result) {
    if (err) {
      console.error(err);
      throw err;
    }
    res.status(200).send('success');
  });
});


// exports default router;
module.exports = router;
