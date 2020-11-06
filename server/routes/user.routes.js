let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

//Login
let login = require("../models/login");
router.route("/getLogin/create").post((req, res, next) => {
    login.create(req.body, (error, data) =>{
        if(error){
            console.log("Login DB Error");
            return next(error)
        }else{
            res.json(data)
        }
    });
});
router.route('/getLogin').get((req, res) => {
    login.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
//FoodParkStudents
let foodparkStudents = require("../models/foodparkStudents");
router.route("/getFoodParkStudents/create").post((req, res, next) => {
    foodparkStudents.create(req.body, (error, data) =>{
        if(error){
            console.log("FoodParkStudents DB Error");
            return next(error)
        }else{
            res.json(data)
        }
    });
});
router.route('/getFoodParkStudents').get((req, res) => {
    foodparkStudents.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
//ShakthiSp
let Shakti_sp = require("../models/Sp_Menu/shakthi_sp");
router.route("/getShaktiSp/create").post((req, res, next) => {
    Shakti_sp.create(req.body, (error, data) =>{
        if(error){
            console.log("ShaktiSp DB Error");
            return next(error)
        }else{
            res.json(data)
        }
    });
});
router.route('/getShakti_sp').get((req, res) => {
    Shakti_sp.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
//ShakthiFp
let Shakti_fp = require("../models/Fp_Menu/shakthi_fp");
router.route("/getShaktiFp/create").post((req, res, next) => {
    Shakti_fp.createIndexes(req.body, (error, data) =>{
        if(error){
            console.log("ShaktiFp DB Error");
            return next(error)
        }else{
            res.json(data)
        }
    });
});
router.route('/getShaktiFp').get((req, res) => {
    Shakti_fp.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
//DarlingSp
let Darling_sp = require("../models/Sp_Menu/darling_sp");
router.route("/getDarlingSp/create").post((req, res, next) => {
    Darling_sp.create(req.body, (error, data) =>{
        if(error){
            console.log("DarlingSp DB Error");
            return next(error)
        }else{
            res.json(data)
        }
    });
});
router.route('/getDarlingSp').get((req, res) => {
    Darling_sp.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
//DarlingFp
let Darling_fp = require("../models/Fp_Menu/darling_fp");
router.route("/getDarlingFp/create").post((req, res, next) => {
    Darling_fp.create(req.body, (error, data) =>{
        if(error){
            console.log("DarlingFp DB Error");
            return next(error)
        }else{
            res.json(data)
        }
    })
})
router.route('/getDarlingFp').get((req, res) => {
    Darling_fp.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
//NeelkeshSp
let Neelkesh_sp = require("../models/Sp_Menu/neelkesh_sp");
router.route("/getNeelkeshSp/create").post((req, res, next) => {
    Neelkesh_sp.create(req.body, (error, data) =>{
        if(error){
            console.log("NeelkeshSp DB Error");
            return next(error)
        }else{
            res.json(data)
        }
    })
})
router.route('/getNeelkeshSp').get((req, res) => {
    Neelkesh_sp.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
//NeelkeshFp
let Neelkesh_fp = require("../models/Fp_Menu/neelkesh_fp");
router.route("/getNeelkeshFp/create").post((req, res, next) => {
    Neelkesh_fp.create(req.body, (error, data) =>{
        if(error){
            console.log("NellkeshFp DB Error");
            return next(error)
        }else{
            res.json(data)
        }
    })
})
router.route('/getNeelkeshFp').get((req, res) => {
    Neelkesh_fp.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
//Orders
let orders = require("../models/order");
router.route("/getOrders/create").post((req, res, next) => {
    orders.create(req.body, (error, data) =>{
        if(error){
            console.log("Orders DB Error");
            return next(error)
        }else{
            res.json(data)
        }
    })
})
router.route('/getOrders').get((req, res) => {
    orders.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
//PaymentHistory
let paymentHistory = require("../models/Payments/paymentHistory");
router.route("/getPayment/create").post((req, res, next) => {
    paymentHistory.create(req.body, (error, data) =>{
        if(error){
            console.log("PaymentHistory DB Error");
            return next(error)
        }else{
            res.json(data)
        }
    })
})
router.route('/getPayment').get((req, res) => {
    paymentHistory.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.route('/edit/:id').get((req, res) => {
    user.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.route('/update/:id').put((req, res, next) => {
    user.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);           
        } else {
            res.json(data)
            console.log('User updated successfully !')
        }
    })
})

router.route('/delete/:id').delete((req, res, next) => {
    user.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;