const Bankdetails = require('../models/bank')
module.exports = (req,res) => {
    const {
        accountNumber,
        confirmaccountNumber,
        IFSC,
        bankName
    } = req.body;
let passbookIMG = [];
if(req.file){
    passbookIMG=req.file.filename
}
    
if(accountNumber==confirmaccountNumber){

    const _bankdetails = new Bankdetails({
        accountNumber,
        confirmaccountNumber,
        IFSC,
        passbookIMG,
        bankName
    })
    _bankdetails.save((error, data) => {
        if (error) {
            res.status(400).json({
                message: error
            })
        }
        if (data) {
            res.status(201).json({
                message: 'bank details saved'
            })
        }

    });

}
else {
    res.send('account number mismached')
}
};