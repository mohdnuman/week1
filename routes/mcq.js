const express=require('express');
const router=express.Router();

const mcqController=require('../controllers/mcq_controller');
router.post('/create',mcqController.create);

module.exports=router;