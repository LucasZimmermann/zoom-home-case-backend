const jwt = require("jsonwebtoken");

//Use the ApiKey and APISecret from config.js
const payload = {
  iss: "VcsyT9XDTK62fkY_-RZqag",
  exp: new Date().getTime() + 5000,
};

const token = jwt.sign(payload, "JNi3UDEd7aTYgN7Q4GoG5VWWXie20au0VHyT");

function addToken(req, res, next) {
  req.body["token"] = token;
  next();
}

module.exports = { addToken };
