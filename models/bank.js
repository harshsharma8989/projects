const mongoose=require('mongoose');

const bankdetailschema = new mongoose.Schema({
    accountNumber:{
        type:String,
        required:true,
        min:9,
        max:18
    },
    confirmaccountNumber:{
        type:String,
        min:9,
        max:18,
        required:true
    },
    IFSC:{
        type:String,
        required:true
    },
    passbookIMG:{
        type:String
    },
    bankName:{
        type:String,
        required:true
    },



}) 
module.exports=mongoose.model('Bankdetails',bankdetailschema)