// const express = require('express');
// const app = express();
// const  jwt  =  require('jsonwebtoken');
// const mysql = require('mysql');
// const  fs = require('fs');
// const bodyParser = require('body-parser');
// const formidableMiddleware = require('express-formidable');
// const jsonParser = bodyParser.json({type:'application/json'});
// const Port = 3001;
// const urlencodedParser = bodyParser.urlencoded({ extended: true });
// app.use(jsonParser);
// app.use(urlencodedParser);
// app.use(formidableMiddleware({
//   encoding: 'utf-8',
//   uploadDir: './images',
//   multiples: true,
// }));
// const SECRET_KEY = "secretkey";
// // parse application/x-www-form-urlencoded
// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "house_db"
//   });
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected Successfully!")
//   });

//   // app.post('/upload',(req,res) => {
//   //   const {path} = req.files.avatar;
//   //   const {ten,nha} = req.fields;
//   //   const img = path+".jpg";
//   //   let sql = "INSERT INTO test (ten, nha, img) VALUES (?,?,?)";
//   //  fs.rename(path, path +'.jpg',err =>{
//   //   if (err) throw err;
//   //   res.send('xin chao');
//   //  });
//   //  con.query(sql,[ten,nha,img], (error, results, fields) => {
//   //   if (error){
//   //     throw err;
//   //   } else{
//   //     console.log(results);
//   //   }
//   //   })
//   // })

// app.post('/api/checkToken',verifyToken,(req,res)=>{
//   jwt.verify(req.token,SECRET_KEY, (err,user)=>{
//     if(err){
//       res.sendStatus(403);
//   }else{
//       res.send(
        
//           user
//       );
//   }
//   });
 
// });
// app.get('/api/houses', jsonParser, function (req, res) {

//    con.query('SELECT * FROM house', function(error, results, fields) {
//      if (results.length > 0) {
//          res.json({"houses":results})
//         //  res.json(results)
//      } else {
//        res.json({"success":false,'data':"User not found , please try again"})
//      }			
//      res.end();
// });
// })

// app.post('/api/cateID', jsonParser, function (req, res) {
//   const {cate_id} = req.body;
//   con.query('SELECT * FROM category WHERE cate_id = ?',[cate_id], function(error, results, fields) {
//     if (results.length > 0) {
//         res.json({"CateHouse":results})
//        //  res.json(results)
//     } else {
//       res.json({"success":false,'data':"User not found , please try again"})
//     }			
//     res.end();
// });
// })

// app.post('/api/register', jsonParser, function (req, res) {
//   const {username,password,email} = req.body;
//   let sql = "INSERT INTO users (username, password, email) VALUES (?,?,?)";
//   if (username && password && email) {
//   con.query(sql,[username,password,email], function(error, results, fields) {
//     if (error) {
//       console.log("error ocurred",error);
//       res.send({
//         "code":400,
//         "failed":"error ocurred"
//       })
//     }else{
//       console.log('The solution is: ', results);
//       res.send({
//         "code":200,
//         "success":"user registered sucessfully"
//           });
//     }
//     res.end();
//     })
//   }else {
//     res.send({
//       "code":500,
//       "success":"username password email wrong"
//         });
//   }
// })

// app.post('/api/userID', jsonParser, function (req, res) {
//   const {userID} = req.body;
//   con.query('SELECT * FROM users WHERE userID = ?',[userID], function(error, results, fields) {
//     if (results.length > 0) {
//         res.json({"user":results})
//        //  res.json(results)
//     } else {
//       res.json({"success":false,'data':"User not found , please try again"})
//     }			
//     res.end();
// });
// })
// function verifyToken(req, res, next){
    
//   //Request header with authorization key
//   const bearerHeader = req.headers['authorization'];
  
//   //Check if there is  a header
//   if(typeof bearerHeader !== 'undefined'){
//       const bearer = bearerHeader.split(' ');
      
//       //Get Token arrray by spliting
//       const bearerToken = bearer[1];
//       req.token = bearerToken;
//       //call next middleware
//       next();
//   }else{
//       res.sendStatus(403);
//   }
// }

// app.post('/user/login', jsonParser, function (req, res) {

//      const {email,password} = req.body;
    
       
//     if (email && password) {
//       con.query('SELECT * FROM users WHERE email= ? AND password=?', [email, password], function(error, results, fields) {
//         if (results.length > 0) {
//           const  expiresIn  =  24  *  60  *  60;
//                         const  token  =  jwt.sign({ user:  results[0] }, SECRET_KEY, {
//                           expiresIn:  expiresIn
//                       });
//             res.json({"success":true,token})
//         } else {
//           res.json({"success":false,'data':"User not found , please try again"})
//         }			
//         res.end();
//       });
//     } else {
//       res.send('Please enter Username and Password!');
//       // res.json({"success":2});
//       res.end();
//     }
// });
// var server = app.listen(Port,function(){
//     // var host = server.address().address
//     // var port = server.address().port
//     console.log(`Server đang lắng nghe port ${Port}`);
// });
const express = require('express');
const multer = require('multer');
const app = express();
const  jwt  =  require('jsonwebtoken');
const  fs = require('fs');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({type:'application/json'});
const Port = 3001;
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(urlencodedParser);
const upload = multer({ dest: 'uploads/' });
app.post('/', upload.single('imgFile'), (req, res) => {
  console.log(req.body);
  fs.readFile(req.file.path,err=> {
    if (err) {
    console.log('Error: ', err);
  }
})
  res.send('success');
});



const SECRET_KEY = "secretkey";

app.post('/upload',upload.single("imagesHouse"),(req,res) => {

  const {path} = req.files.avatar;
  const {ten,nha} = req.fields;
  const img = path+".jpg";
  let sql = "INSERT INTO test (ten, nha, img) VALUES (?,?,?)";
 fs.rename(path, path +'.jpg',err =>{
  if (err) throw err;
  res.send('xin chao');
 });
 con.query(sql,[ten,nha,img], (error, results, fields) => {
  if (error){
    throw err;
  } else{
    console.log(results);
  }
  })
})
// parse application/x-www-form-urlencoded
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "house_db"
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected Successfully!")
  });

app.post('/api/checkToken',verifyToken,(req,res)=>{
  jwt.verify(req.token,SECRET_KEY, (err,user)=>{
    if(err){
      res.sendStatus(403);
  }else{
      res.send(
        
          user
      );
  }
  });
 
});
app.get('/api/houses', jsonParser, function (req, res) {

   con.query('SELECT * FROM house', function(error, results, fields) {
     if (results.length > 0) {
         res.json({"houses":results})
        //  res.json(results)
     } else {
       res.json({"success":false,'data':"User not found , please try again"})
     }			
     res.end();
});
})

app.post('/api/cateID', jsonParser, function (req, res) {
  const {cate_id} = req.body;
  con.query('SELECT * FROM category WHERE cate_id = ?',[cate_id], function(error, results, fields) {
    if (results.length > 0) {
        res.json({"CateHouse":results})
       //  res.json(results)
    } else {
      res.json({"success":false,'data':"User not found , please try again"})
    }			
    res.end();
});
})

app.post('/api/register', jsonParser, function (req, res) {
  const {username,password,email} = req.body;
  let sql = "INSERT INTO users (username, password, email) VALUES (?,?,?)";
  if (username && password && email) {
  con.query(sql,[username,password,email], function(error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      console.log('The solution is: ', results);
      res.send({
        "code":200,
        "success":"user registered sucessfully"
          });
    }
    res.end();
    })
  }else {
    res.send({
      "code":500,
      "success":"username password email wrong"
        });
  }
})

app.post('/api/userID', jsonParser, function (req, res) {
  const {userID} = req.body;
  con.query('SELECT * FROM users WHERE userID = ?',[userID], function(error, results, fields) {
    if (results.length > 0) {
        res.json({"user":results})
       //  res.json(results)
    } else {
      res.json({"success":false,'data':"User not found , please try again"})
    }			
    res.end();
});
})
function verifyToken(req, res, next){
    
  //Request header with authorization key
  const bearerHeader = req.headers['authorization'];
  
  //Check if there is  a header
  if(typeof bearerHeader !== 'undefined'){
      const bearer = bearerHeader.split(' ');
      
      //Get Token arrray by spliting
      const bearerToken = bearer[1];
      req.token = bearerToken;
      //call next middleware
      next();
  }else{
      res.sendStatus(403);
  }
}

app.post('/user/login', jsonParser, function (req, res) {

     const {email,password} = req.body;
    
       
    if (email && password) {
      con.query('SELECT * FROM users WHERE email= ? AND password=?', [email, password], function(error, results, fields) {
        if (results.length > 0) {
          const  expiresIn  =  24  *  60  *  60;
                        const  token  =  jwt.sign({ user:  results[0] }, SECRET_KEY, {
                          expiresIn:  expiresIn
                      });
            res.json({"success":true,token})
        } else {
          res.json({"success":false,'data':"User not found , please try again"})
        }			
        res.end();
      });
    } else {
      res.send('Please enter Username and Password!');
      // res.json({"success":2});
      res.end();
    }
});
var server = app.listen(Port,function(){
    // var host = server.address().address
    // var port = server.address().port
    console.log(`Server đang lắng nghe port ${Port}`);
});