// const express = require('express');
// const multer = require('multer');
// const app = express();
// const jwt = require('jsonwebtoken');
// const mysql = require('mysql');
// const path = require("path");
// const bodyParser = require('body-parser');
// const jsonParser = bodyParser.json({ type: 'application/json' });
// const Port = 3001;
// const urlencodedParser = bodyParser.urlencoded({ limit: '50mb', extended: true });

// app.use(urlencodedParser);
// app.use('/uploads', express.static('uploads'))


// const SECRET_KEY = "secretkey";

// const con = mysql.createConnection({
//   host: "us-cdbr-iron-east-02.cleardb.net",
//   user: "b27040c6eb4015",
//   password: "1b95f2d3",
//   database: "heroku_7fba1b91471eaf6"
// });
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected Successfully!")
// });

// var storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, 'uploads/')
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.fieldname + Date.now() + path.extname(file.originalname))
//   }
// })

// var uploads = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 5 } }).single('imgFile');
// app.post('/upload', function (req, res, next) {
//   uploads(req, res, function (err) {
//     if (err) throw err;
//     const { filename } = req.file;
//     const images = `http://192.168.1.15:3001/uploads/${filename}`;
//     const {
//       township,
//       city,
//       guild,
//       Street,
//       gender,
//       cate_id,
//       rent_cost,
//       Deposit,
//       internet,
//       electric_money,
//       water_money,
//       capacity,
//       userID,
//       houseName,
//       note,
//       phone,
//     } = req.body;
//     try {

//       var sql = "INSERT INTO house (houseName, note, cate_id, images, township, userID, guild, city, Street, water_money, electric_money, rent_cost, phone, Deposit, gender, internet, capacity) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

//       var query = con.query(sql, [houseName, note, cate_id, images, township, userID, guild, city, Street, water_money, electric_money, rent_cost, phone, Deposit, gender, internet, capacity], function (err, result) {
//         console.log('inserted data');
//       });
//       res.json({ message: 'Successfully! uploaded', status: 200 });

//     } catch (err) {
//       res.send(400);
//     }
//   });
// });
//   app.post('/api/checkToken', verifyToken, (req, res) => {
//     jwt.verify(req.token, SECRET_KEY, (err, user) => {
//       if (err) {
//         res.sendStatus(403);
//       } else {
//         res.send(
//           user
//         );
//       }
//     });

//   });

//   app.post('/api/cateID', jsonParser, function (req, res) {
//     const { cate_id } = req.body;
//     con.query('SELECT * FROM category WHERE cate_id = ?', [cate_id], function (error, results, fields) {
//       if (results.length > 0) {
//         res.json({ "CateHouse": results })
//       } else {
//         res.json({ "success": false, 'data': "User not found , please try again" })
//       }
//       res.end();
//     });
//   })

//   app.post('/api/searchStreet', jsonParser, function (req, res) {
//     const { nameSearch } = req.body;
//     console.log(nameSearch);
//     con.query(`SELECT * FROM house WHERE Street LIKE "%${nameSearch}%"`, function (error, results, fields) {
//       if (results.length > 0) {
//         res.send({ "data": results })
//       } else {
//         res.send({ "success": false, 'data': "User not found , please try again" })
//       }
//       res.end();
//     });
//   })
//   app.post('/api/searchTownShip', jsonParser, function (req, res) {
//     const { township } = req.body;
//     console.log(township);
//     con.query(`SELECT * FROM house WHERE township LIKE "%${township}%"`, function (error, results, fields) {
//       if (results.length > 0) {
//         res.send({ "data": results })
//       } else {
//         res.send({ "success": false, 'data': "User not found , please try again" })
//       }
//       res.end();
//     });
//   })
//   app.get('/api/houses', jsonParser, function (req, res) {
//     var pageSize = parseInt(req.query.pageSize);
//     var currentPage = 1;
//     var start = 0;
//     if (typeof req.query.page !== 'undefined') {
//       currentPage = parseInt(req.query.page);
//     }
//     if (currentPage > 1) {
//       start = (currentPage - 1) * pageSize;
//     }
//     con.query('SELECT * FROM house ORDER BY house_id DESC limit ? OFFSET ?', [pageSize, start], function (error, results, fields) {
//       res.json({ "houses": results })
//       res.end();
//     });
//   })

//   app.get('/', jsonParser, function (req, res) {
   
//       con.query('SELECT * FROM house', function (error, results, fields) {
//         res.json({ "data": results });
//     });
//   })



//   app.post('/api/register', jsonParser, function (req, res) {
//     const { username, password, email } = req.body;
//     let sql = "INSERT INTO users (username, password, email) VALUES (?,?,?)";
//     if (username && password && email) {
//       con.query(sql, [username, password, email], function (error, results, fields) {
//         if (error) {
//           console.log("error ocurred", error);
//           res.send({
//             "code": 400,
//             "failed": "error ocurred"
//           })
//         } else {
//           console.log('The solution is: ', results);
//           res.send({
//             "code": 200,
//             "success": "user registered sucessfully"
//           });
//         }
//         res.end();
//       })
//     } else {
//       res.send({
//         "code": 500,
//         "success": "username password email wrong"
//       });
//     }
//   })

//   app.post('/api/userID', jsonParser, function (req, res) {
//     const { userID } = req.body;
//     con.query('SELECT * FROM users WHERE userID = ?', [userID], function (error, results, fields) {
//       if (results.length > 0) {
//         res.json({ "user": results })
//         //  res.json(results)
//       } else {
//         res.json({ "success": false, 'data': "User not found , please try again" })
//       }
//       res.end();
//     });
//   })
//   function verifyToken(req, res, next) {

//     //Request header with authorization key
//     const bearerHeader = req.headers['authorization'];

//     //Check if there is  a header
//     if (typeof bearerHeader !== 'undefined') {
//       const bearer = bearerHeader.split(' ');

//       //Get Token arrray by spliting
//       const bearerToken = bearer[1];
//       req.token = bearerToken;
//       //call next middleware
//       next();
//     } else {
//       res.sendStatus(403);
//     }
//   }

//   app.post('/user/login', jsonParser, function (req, res) {

//     const { email, password } = req.body;


//     if (email && password) {
//       con.query('SELECT * FROM users WHERE email= ? AND password=?', [email, password], function (error, results, fields) {
//         if (results.length > 0) {
//           const expiresIn = 24 * 60 * 60;
//           const token = jwt.sign({ user: results[0] }, SECRET_KEY, {
//             expiresIn: expiresIn
//           });
//           res.json({ "success": true, token })
//         } else {
//           res.json({ "success": false, 'data': "User not found , please try again" })
//         }
//         res.end();
//       });
//     } else {
//       res.send('Please enter Username and Password!');
//       // res.json({"success":2});
//       res.end();
//     }
//   });
// app.listen(process.env.PORT || Port);
const express = require('express');
const multer = require('multer');
const app = express();
const engines = require('consolidate');
const paypal = require('paypal-rest-sdk');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const path = require("path");
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({ type: 'application/json', limit: '50mb', });
const Port = 3001;
const router = express.Router()
const urlencodedParser = bodyParser.urlencoded({ limit: '50mb', extended: true });
app.use(cors());
app.use(jsonParser);
app.use(urlencodedParser);

app.use('/uploads', express.static('uploads'))

app.use(router);

app.engine("ejs",engines.ejs);
app.set("views","./views");
app.set("view engine","ejs");
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AdZcWgrG8xc6qqrYgxixIF1loEU2dOKFV2oqZM2AWMB6E2_UW5HkxjfDha4RL3ezHgCOfnIfswTWYOCv',
  'client_secret': 'EEx33gpQDt2Wvim2OIQgj5W2OSeWis7TpAwnWtbApnh_a0Y2VvZEpQkpn48yLtOp29IQ5CBGCrG6_n2e'
});

const SECRET_KEY = "secretkey";

const con = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b27040c6eb4015",
  password: "1b95f2d3",
  database: "heroku_7fba1b91471eaf6"
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected Successfully!")
});
var maxSize = 50 * 1024 * 1024;
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/')
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + Date.now() + path.extname(file.originalname))
  },
  onFileUploadStart: function(file, req, res){
    if(req.files.file.length > maxSize) {
      return false;
    }
  }
})


var uploads = multer({ storage: storage, limits: { fileSize: maxSize } }).single('imgFile');
// app.post('/upload', upload.single('imgFile'), (req, res) => {
  router.post('/upload', function (req, res, next) {
  uploads(req, res, function (err) {
    if (err) throw err;
    const { filename } = req.file;
    const images = `https://dat-khoa.herokuapp.com/uploads/${filename}`;
    console.log(images);
    const {
      township,
      city,
      guild,
      Street,
      gender,
      cate_id,
      rent_cost,
      Deposit,
      internet,
      electric_money,
      water_money,
      capacity,
      userID,
      houseName,
      note,
      phone,
    } = req.body;
    try {

      var sql = "INSERT INTO house (houseName, note, cate_id, images, township, userID, guild, city, Street, water_money, electric_money, rent_cost, phone, Deposit, gender, internet, capacity) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

      var query = con.query(sql, [houseName, note, cate_id, images, township, userID, guild, city, Street, water_money, electric_money, rent_cost, phone, Deposit, gender, internet, capacity], function (err, result) {
        console.log('inserted data');
      });
      res.json({ message: 'Successfully! uploaded', status: 200 });

    } catch (err) {
      res.send(400);
    }
  });
});
router.post('/updateProfile', function (req, res, next) {
  uploads(req, res, function (err) {
    if (err) throw err;
    const { filename } = req.file;
    console.log(filename);
    const images = `https://dat-khoa.herokuapp.com/uploads/${filename}`;
    
    const {
      username,
      password,
      email,
      phone,
      address,
      userID,
    } = req.body;
    console.log(req.body);
    res.status(201);
   
    try {
      const sql = 'UPDATE users SET ? WHERE ?';
      const query = con.query(sql,[{ username: username, password: password, email: email, phone: phone, address: address, avatar: images }, { userID: userID }], function (err, result) {
        console.log(result);
        if (result.affectedRows > 0) {
          console.log('inserted data');
          res.send({ data: "Update Profile Successfully", status: 200 });
        } else {
          res.json({ data: 'Edit Profile failed!', status: 400 });
        }
      });
      
    } catch (err) {
      res.send(400);
    }
  });
});

router.get("/",(req,res) => {
  res.render("index");
});
router.get('/paypal',(req,res) => {
  var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "https://dat-khoa.herokuapp.com/success",
        "cancel_url": "https://dat-khoa.herokuapp.com/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "item",
                "sku": "item",
                "price": "1.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "1.00"
        },
        "description": "This is the payment description."
    }]
};
 
 
paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        console.log("Create Payment Response");
        console.log(payment);
        res.redirect(payment.links[1].href);
      
    }
});
});
router.get("/success",(req,res) => {
  // res.send("Thành Công");
  var PayerID = req.query.PayerID;
  var paymentId = req.query.paymentId;
  var execute_payment_json = {
    "payer_id": PayerID,
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": "1.00"
        }
    }]
};



paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Get Payment Response");
        console.log(JSON.stringify(payment));
        res.render('success');
    }
});
});
router.get("/cancel",(req,res) => {
  res.render("cancel");
});

router.get('/listPosts', jsonParser, function (req, res) {
   const { userID } = req.query;
   var pageSize = parseInt(req.query.pageSize);
   var currentPage = 1;
   var start = 0;
   if (typeof req.query.page !== 'undefined') {
     currentPage = parseInt(req.query.page);
   }
   if (currentPage > 1) {
     start = (currentPage - 1) * pageSize;
   }
  //  'SELECT * FROM house ORDER BY house_id DESC limit ? OFFSET ?'
  con.query('SELECT * FROM house WHERE userID = ? ',[userID], function (error, results, fields) {
    if (error) throw error;
    res.json({ "data": results, code: 200 });
});
});
 

 
router.post('/api/checkToken', verifyToken, (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err, user) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.send(
          user
        );
      }
    });

  });

  router.post('/api/cateID', jsonParser, function (req, res) {
    const { cate_id } = req.body;
    con.query('SELECT * FROM category WHERE cate_id = ?', [cate_id], function (error, results, fields) {
      if (results.length > 0) {
        res.json({ "CateHouse": results })
        //  res.json(results)
      } else {
        res.json({ "success": false, 'data': "User not found , please try again" })
      }
      res.end();
    });
  })
 
  router.post('/api/searchStreet', jsonParser, function (req, res) {
    const { nameSearch, RangeLow, RangeHigh } = req.body;
    const sql = nameSearch == "" ? `SELECT * FROM house WHERE  rent_cost  BETWEEN ${RangeLow} AND ${RangeHigh}` : `SELECT * FROM house WHERE Street LIKE "%${nameSearch}%" AND rent_cost  BETWEEN ${RangeLow} AND ${RangeHigh}`;
    console.log("nameSearch", nameSearch);
    console.log(RangeLow);
    console.log(RangeHigh);
    con.query(sql, function (error, results, fields) {
      if (results.length > 0) {
        res.send({ "data": results })
      } else {
        res.send({ "success": false, 'data': "User not found , please try again" })
      }
      res.end();
    });
  });

  router.post('/api/searchTownShip', jsonParser, function (req, res) {
    const { township } = req.body;
    console.log(township);
    con.query(`SELECT * FROM house WHERE township LIKE "%${township}%"`, function (error, results, fields) {
      if (results.length > 0) {
        res.send({ "data": results })
      } else {
        res.send({ "success": false, 'data': "User not found , please try again" })
      }
      res.end();
    });
  })
  router.get('/api/houses', jsonParser, function (req, res) {
    var pageSize = parseInt(req.query.pageSize);
    console.log(pageSize);
    var currentPage = 1;
    var start = 0;
    if (typeof req.query.page !== 'undefined') {
      currentPage = parseInt(req.query.page);
    }
    if (currentPage > 1) {
      start = (currentPage - 1) * pageSize;
    }
    con.query('SELECT * FROM house ORDER BY house_id DESC limit ? OFFSET ?', [pageSize, start], function (error, results, fields) {
      res.json({ "houses": results })
      res.end();
    });
  })

  router.get('/api/example', jsonParser, function (req, res) {
    var pageSize = parseInt(req.query.size);
    var pageCount = 0;
    var totalRec = 0;
    var currentPage = 1;
    var start = 0;
    console.log("currentPage", req.query.page);

    con.query('SELECT COUNT(*) AS totalRec FROM test', function (error, results, fields) {
      if (error) throw error;
      totalRec = results[0].totalRec;
      pageCount = Math.ceil(totalRec / pageSize);
      console.log("totalRec", totalRec);
      console.log("pageCount", pageCount);

      if (typeof req.query.page !== 'undefined') {
        currentPage = parseInt(req.query.page);
      }
      if (currentPage > 1) {
        start = (currentPage - 1) * pageSize;
      }
      con.query('SELECT * FROM test ORDER BY id ASC limit ? OFFSET ?', [pageSize, start], function (error, results, fields) {
        res.json({ "data": results });
      })
    });
  })

  router.post('/deletePostHouse',jsonParser, function (req, res) {
    const { house_id } = req.body;
    console.log(req.body);
    console.log(house_id);
    con.query('DELETE FROM house WHERE house_id =?', [house_id], function (error, results, fields) {
     if (error) throw error;
      if(results.affectedRows > 0)
      {
        res.send({ 'success': true, 'message': `delete successfully ${results.affectedRows}` });
      } else {
        res.send({ 'success': false, 'message': `delete failed ${results.affectedRows}` });
      }
   });
 });


 router.post('/api/register', jsonParser, function (req, res) {
    const { username, password, email } = req.body;
    let sql = "INSERT INTO users (username, password, email) VALUES (?,?,?)";
    if (username && password && email) {
      con.query(sql, [username, password, email], function (error, results, fields) {
        if (error) {
          console.log("error ocurred", error);
          res.send({
            "code": 400,
            "failed": "error ocurred"
          })
        } else {
          console.log('The solution is: ', results);
          res.send({
            "code": 200,
            "success": "user registered sucessfully"
          });
        }
        res.end();
      })
    } else {
      res.send({
        "code": 500,
        "success": "username password email wrong"
      });
    }
  })

  router.post('/api/userID', jsonParser, function (req, res) {
    const { userID } = req.body;
    
    con.query('SELECT * FROM users WHERE userID = ?', [userID], function (error, results, fields) {
      if (results.length > 0) {
        res.json({ "user": results })
        //  res.json(results)
      } else {
        res.json({ "success": false, 'data': "User not found , please try again" })
      }
      res.end();
    });
  })
  function verifyToken(req, res, next) {

    //Request header with authorization key
    const bearerHeader = req.headers['authorization'];

    //Check if there is  a header
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');

      //Get Token arrray by spliting
      const bearerToken = bearer[1];
      req.token = bearerToken;
      //call next middleware
      next();
    } else {
      res.sendStatus(403);
    }
  }

  router.post('/user/login', jsonParser, function (req, res) {

    const { email, password } = req.body;

    console.log(email);
    console.log(password);
    if (email && password) {
      con.query('SELECT * FROM users WHERE email= ? AND password=?', [email, password], function (error, results, fields) {
        if (results.length > 0) {
          const expiresIn = 30 * 24 * 60 * 60;
          const token = jwt.sign({ user: results[0] }, SECRET_KEY, {
            expiresIn: expiresIn
          });
          console.log(token);
          res.json({ "success": true, token })
        } else {
          res.json({ "success": false, 'data': "User not found , please try again" })
        }
        res.end();
      });
    } else {
      res.send('Please enter Username and Password!');
      // res.json({"success":2});
      res.end();
    }
  });
app.listen(process.env.PORT || Port);
