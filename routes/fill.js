const express=require('express');
const router=express.Router();

const fillController=require('../controllers/fill_controller');
router.post('/create',fillController.create);

module.exports=router;