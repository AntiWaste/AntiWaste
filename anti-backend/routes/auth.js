const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
// const config = require('config')
//@desc    Register a new user
//@route   POST /api/auth/register
//@access  Public
const JWT_SECRET = 'sncacnoqwdwqibqwkq';
router.post('/register',[
    check('username', 'Username must be at least 3 characters').isLength({ min: 3 }),
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  
],async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Invalid registration data' });
      }
      const {username, email, password,role } = req.body;
      const candidate = await User.findOne( { username });
      if (candidate) {
        return res.status(400).json({ message: 'This user already exists' });
      }
      const hashPassword = await bcrypt.hash(password, 8);
      const user = new User({
        username,
        email,
        password: hashPassword,
        role
      });
      await user.save();
      res.status(201).json({ message: 'User created' });
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: 'Something went wrong, try again' });
    }
  }
  
  
);
//@desc    Login a user
//@route   POST /api/auth/login
//@access  Public
router.post(
  '/login',
  [
    check('email', 'Please enter a valid email').not().isEmpty(),
    check('password', 'Please enter a valid password').isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'This user does not exist' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password' });
      }
      const token = await jwt.sign({user} , JWT_SECRET, { expiresIn: '1h' });
      res.json({ token, user, message: 'login succes' });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, try again' });
    }
  }
);
//get login user from token
router.get('/user', async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(400).json({ message: 'User is not authorized' });
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ user: decoded.user });
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again' });
  }
});




//export
module.exports = router;
