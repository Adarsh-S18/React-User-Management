var express = require('express');
var path = require('path');
var router = express.Router();
const User = require('../Models/user.models')
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const adminName = 'adarsh@gmail.com';
const adminPassword = 'adarsh';



//  S E T T I N G   T H E    A P I S  //




router.post('/api/register', async (req, res) => {
  try {
    await User.create({
      fname: req.body.fname,
      lname: req.body.lname,
      mobilenumber: req.body.mobilenumber,
      email: req.body.email,
      password: req.body.password,

    })
    res.json({ status: 'OK' })
  } catch (err) {
    res.json({ status: 'error', error: 'Duplicate value Found' })
  }
})



router.post('/api/adminlogin', async (req, res) => {
  console.log('hi');
  console.log(req.body);
  if (req.body.email == adminName && req.body.password == adminPassword) {
    console.log('Logged IN');
    return res.json({ status: 'UserOk' })
  }
  else {
    console.log('Not LOggedin');
    return res.json({ status: 'Notok' })
  }
})



router.post('/api/login', async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
  })
  if (user) {
    const token = jwt.sign({
      fname: user.fname,
      lname: user.lname,
      mobilenumber: user.mobilenumber,
      email: user.email,
      id: user._id,
      image: user.image
    }, 'secret123', { expiresIn: 1000 * 60 * 60 * 24 })
    res.cookie("jwt", token, { httpOnly: true, secure: false, maxAge: 1000 * 60 * 60 * 24 * 7 })
    return res.json({ status: 'ok', user: token })

  } else {
    return res.json({ status: 'UserNotOk', user: false })
  }
})

router.get('/api/home', (req, res) => {
  console.log("jwt :", req.headers.jwt);
  jwt.decode(req.headers.jwt)
  res.json({})
})

router.get('/api/profile', (req, res) => {
  console.log("jwt :", req.headers.jwt);
  const user = jwt.decode(req.headers.jwt);
  User.findById(user.id).then(user => {
    res.json(user)
  })
})

router.post('/api/addimage', (req, res) => {
  let user = req.headers.jwt;
  user = jwt.decode(user)

  // console.slog(user,'dsssssssssssss');
  const filename = req.files.image.name;
  const imageFile = req.files.image;
  const basePath = path.join(__dirname, '../public/images/')
  const fullPath = basePath + filename;
  imageFile.mv(fullPath, (err) => {
    if (err) throw new Error(err.message)

    User.updateOne({ _id: mongoose.Types.ObjectId(user.id) }, { $set: { image: `/images/${filename}` } }).then(result => {
      console.log(result);
    })
  })
})


router.get('/api/adminpage', async (req, res) => {
  const users = await User.find()
  res.json(users)
})

router.delete('/api/deleteuser/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    await User.findByIdAndDelete(req.params.id)
    res.json({ msg: "User Deleted Successfully" })
  } catch (error) {
    res.status(500).json({ err: error.message || "Error While Deleting User" })
  }
})


module.exports = router;

