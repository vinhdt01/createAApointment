var jwt = require('jsonwebtoken');

exports.Auth =async (req, res , next) => {
    const authorizationHeader = req.headers['authorization'];
    // 'Beaer [token]'
    const token = authorizationHeader.split(' ')[1];
    if (!token)  {
      res.send( 'Từ chối dịch vụ');
      return;
    }
 await jwt.verify(token, process.env.JWT_ACCESS_KEY, (err, data) => {
    if (err) {
     
        res.json(err);
    } 
    else {
          next();

    }
  });
}
