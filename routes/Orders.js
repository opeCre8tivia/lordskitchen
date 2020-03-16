const express = require('express');
const router = express.Router();
const OrderModel = require('../models/OrderModel');



//@router  POST /api/orders
//@desc    adds orders to the db
//@acess   private.
router.post('/orders', (req,res,next)=>{
    console.log('New order');
    let name=req.body.name;
    let mobile = req.body.mobile;
    let nearestPoint = req.body.nearestPoint;
   let orderNumber = req.body.orderNumber;
    let client = req.body.client;
    let orderDetails = req.body.orderDetails.items;
    let orderTotal = req.body.orderDetails.total;
    let latitude = req.body.latitude;
    console.log(latitude);
    let longitude = req.body.longitude;
    let newOrder  = req.body.newOrder;
    let time = req.body.time;
    console.log(orderDetails);
    console.log(orderTotal);

    //save it to the database

    let newOrderInfo = new OrderModel();
    newOrderInfo.name = name;
    newOrderInfo.mobile = mobile;
    newOrderInfo.nearestPoint = nearestPoint;
    newOrderInfo.orderNumber = orderNumber;
    newOrderInfo.client = client;
    newOrderInfo.orderDetails = orderDetails;
    newOrderInfo.orderTotal = orderTotal;
    newOrderInfo.geolocation.latitude =  latitude;
    newOrderInfo.geolocation.longitude = longitude;
    newOrderInfo.newOrder= newOrder;
    newOrderInfo.time = time
    
    newOrderInfo.save(err =>{
        if(!err){
            res.json({
                err:false,
                msg:'Order saved successfully'
                
            })
        }
        else{
            res.json({
                err:true,
                msg:'Order Not saved ' + err
            })
        }
    });

})



//@router  GET /api/orders
//@desc    get all orders from the db
//@acess   private.
router.get('/orders',  (req,res)=>{
    OrderModel.find({}, (err ,response)=>{
        if(err){
            console.log('Server err' + err)
        }
        res.send(response);
    })
      
        
})


//@router  PUT /api/orders
//@desc    update order status from new to old
//@acess   private.

router.put('/orders/:id', (req,res)=>{
        console.log(req.params.id);
        OrderModel.findByIdAndUpdate(req.params.id , {$set:req.body.order},{runValidators:true}, (err,response)=>{
            if(err){
                console.log(err)
            }
            res.json({
                msg:'Marked as Done'
            })
        });
        
})
    
         

module.exports = router;

