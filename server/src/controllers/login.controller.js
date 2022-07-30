var jwt = require("jsonwebtoken");
const Authen = require("../model/mongoseModel/authen.model.js");

var refreshTokens = [];
var userInfo = "";
exports.refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) {
    res.sendStatus(403);
  }
  jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, data) => {
    if (err) {
      res.sendStatus(403);
    }
    const accessToken = jwt.sign(
      { username: data.username },
      process.env.JWT_ACCESS_KEY,
      {
        expiresIn: "5h",
      }
    );
    var newReFreshToken = jwt.sign(
      { id: userInfo },
      process.env.JWT_REFRESH_KEY,
      { expiresIn: "10h" }
    );
    refreshTokens.push(newReFreshToken);
    res.cookie("refreshToken", newReFreshToken, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 60000 * 60 * 10),
    });
    res.json({ accessToken, a: "1" });
  });
};
exports.Logout = async (req, res) => {
  try {
    res.clearCookie("refreshToken");

    refreshTokens = refreshTokens.filter(
      (token) => token !== req.cookies.refreshToken
    );

    res.status(200).json("logout success");
  } catch (err) {
    res.status(400).json("Failure");
  }
};

exports.Login = async (req, res) => {
  userInfo = req.body.username;
  try {
    const findUser = await Authen.find({
      username: req.body.username,
    });
    if (!findUser) {
      res.status(404).json({ status: "not found account" });
    } else {
      var token = jwt.sign({ id: userInfo }, process.env.JWT_ACCESS_KEY, {
        expiresIn: "5h",
      });
      var refreshToken = jwt.sign(
        { id: userInfo },
        process.env.JWT_REFRESH_KEY,
        { expiresIn: "10h" }
      );
      refreshTokens.push(refreshToken);
      res.cookie("refreshToken", refreshToken, {
        httpOnly: false,
        secure: true,
        expires: new Date(Date.now() + 60000 * 60 * 10),
      });

      res.status(200).json({
        person_id: findUser[0].person_id,
        token: token,
        status: "ok",
        refreshToken: refreshToken,
      });
    }
  } catch (error) {
    res.status(500).json({ status: error });
  }
};
