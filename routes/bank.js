const express=require('express');
const bankdetails=require('../controller/bank');
const router = express.Router();
const multer =require('multer');
const path = require('path');
const shortid=require('shortid');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function(req,file,cb){
        cb(null,shortid.generate()+'-'+file.originalname)
    }
});

const upload = multer({storage});


router.post('/bank',upload.single('passbookIMG'),bankdetails);


module.exports = router;