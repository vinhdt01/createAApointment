const { conn, sql } = require("../../sql/connect.js");
// module.exports = function() {
//   this.createRegister = async function( newData, result) {
// var pool = await conn;
// var sqlString ="INSERT INTO users(name ,phonenumber , username , password ) Values(@name , @phonenumber , @username , @password)"
// return await pool.request()
// .input('name' , sql.VarChar ,newData.name)
// .input('phonenumber' , sql.VarChar , newData.phone)
// .input('username' , sql.VarChar , newData.username)
// .input('password' , sql.VarChar , newData.password)

// .query(sqlString , function (err, data) {
//   if(err) {
//        result(true , null)
//      }
//      else {
//       console.log(newData)

//        result(null , newData)
//      }
// })
//   }
// }

// test

module.exports = function () {
  this.createLogin = async function (newData, result) {
    var pool = await conn;
    var uName = newData.username;
    var PWord = newData.password;
    var b = 0;
    var isExist =
      "Select * from users where username =" +
      `'${uName}'` +
      "and password =" +
      `'${PWord}'`;
    return await pool.request().query(isExist, async function (err, data) {
      if (err) {
        console.log("123");
        result(true, null);
      } else {
        b = data.recordset.length;

        if (b > 0) {
          result(null, data);
        } else {
          result(null, null);
        }
      }
    });
  };
};
