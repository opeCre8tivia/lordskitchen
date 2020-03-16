const express = require('express');
//const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Router = express.Router();


//@route  POST  api/auth
//@des authenticate user info and return token
//@access public

Router.post('/', (req,res)=>{
    const {password} = req.body;
    const pw = 'wereign';

    if(password !== pw){
        res.status(401).json({
            error:true,
            msg:'Wrong Access Code'
        })
    }

    const payload = {
        user:{
            id:'4x20vu204x'
        }
    }

    const secret = 'lkdotsecretdot';

    jwt.sign(payload,secret, {expiresIn:3600}, (err, token)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send(token);
            }
    })
})

module.exports = Router;