const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { jwtSecret } = require('../config/secrets.js')

const Users = require("../users/user-model.js")


router.post('/register', (req, res) => {
    let user = req.body;
    
    const hash = bcrypt.hashSync(user.password, 12);

    user.password = hash;

    Users.add(user)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(500).json(err))


})

router.post('/login', (req, res)=> {
    let { username, password } = req.body;
   
   Users.findBy(username)
   .first()
   .then(user => {
       if (user && bcrypt.compareSync(password, user.password)){
       const token = generateToken(user);
           res.status(200).json({token});
       } else {
        res.status(401).json({ message: "Invalid Credentials" });
       }
   })
   .catch(error => {
    console.log("ERROR: ", error);
    res.status(500).json({ error: "/login error" });
  })
})

function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username,
      department: user.department || "user",
    };
  
    const options = {
      expiresIn: "1h",
    };

    console.log(jwtSecret);
  
    return jwt.sign(payload, jwtSecret, options);
  }
module.exports = router;