const Auth = require("../model/authSchema");
const md5 = require("md5");
const jwt = require('jsonwebtoken');
// require("dotenv").config({path:'config.env'});

const loginUser = async (req, res, next) => {
    let { emailId, password } = req.body;
    // console.log(req.body);
    try {
      let hashedPassword = md5(password);
    //   console.log(hashedPassword);
      const data = await Auth.findOne({ emailId: emailId, password: hashedPassword });
      if (data){
        let payload = { emailId };
        let token = jwt.sign(payload, process.env.SECRECT_KEY, {
          expiresIn: "10h",
        });
        res.status(200).json({
          error: false,
          message: "Login successful",
          data: { payload, token },
        });
      } else {
        res.status(400).json({
          message: "Invalid email or password",
          error: true,
          data: null,
        });
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
};

const registerUser = async (req, res, next) => {
  let { firstName, lastName, emailId, phoneNo, password } = req.body;
  console.log(firstName, lastName, emailId, phoneNo, password);
  try {
    let hashedPassword = md5(password);
    const data = await Auth.findOne({ emailId: emailId });
    if (data) {
      res.status(400).json({
        message: "user already exist",
        error: true,
        data: null,
      });
    } else {
      console.log("hashed password---", hashedPassword);
      console.log(firstName, lastName, emailId, phoneNo, password);
      await Auth.insertMany({
        firstName,
        lastName,
        emailId,
        phoneNo,
        password: hashedPassword,
      });
      res.status(200).json({
        message: "user Registered Successfully",
        error: false,
        data: null,
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  loginUser,
  registerUser,
};