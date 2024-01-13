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
router.post(
  '/register',
  [
    check('username', 'Please enter a valid username').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a valid password').isLength({ min: 6 }),
    check('phone', 'Please enter a valid phone number').isLength({ min: 8 }),
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect registration data',
      });
    }
    try {
      const { username, email, password, phone, role } = req.body;
      console.log(username, password, phone, role);
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res.status(400).json({ message: 'This user already exists' });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const saveUser = new User({
        username,
        email,
        password: hashedPassword,
        phone,
        role,
      });
      await saveUser.save();
      const token = await jwt.sign({ saveUser }, JWT_SECRET, {
        expiresIn: '1h',
      });
      res.status(201).json({ token, user: saveUser, message: 'User created' });
    } catch (e) {
      console.log(e);
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
    check('username', 'Please enter a valid username').not().isEmpty(),
    check('password', 'Please enter a valid password').isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: 'This user does not exist' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password' });
      }
      const token = await jwt.sign({ user }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ token, user, message: 'User logged in' });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, try again' });
    }
  }
);
//get all user
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch {
    res.json({ message: err });
  }
});

//export
module.exports = router;
