const express = require('express');

const router = express.Router();
const items = require('../items');

router.get('/menuitems', (req,res,next)=>{
    res.json(items);
} );



//opelmern

router.get('/name', (req,res,next)=>{
 res.send('REACT NATIVE');
});

//getting one item in a list

router.get('/list/:id', (req,res,next)=>{
    const one = items.find(item =>{
        if (item.id === parseInt(req.params.id)){
            res.send(item);
        }
        else{
            res.send('NO ITEM');
        }
    } );

   return one; 
});



module.exports = router;












