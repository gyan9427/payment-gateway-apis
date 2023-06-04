const PaymentInitialization = require("../../models/gpay/PaymentInitialization");

exports.setPaymentDetails=(req,res)=>{
    let {transactionAmount,currency,paymentMethod} = req.body;
    if(transactionAmount && currency && paymentMethod ){
       let paymentDet =new PaymentInitialization({
        transactionAmount:transactionAmount,
        currency:currency,
        paymentMethod:paymentMethod
       })

       paymentDet.save().then(resp=>{
           res.status(200).json({msg:"payment detail created successfully",data:resp,transactionId:resp._id})
       }).catch(err=>{
            if(res.status==5){
                res.status(500).json({msg:"something went wrong"})
            }else{
                res.status(err.status).json({error:err})
            }
       })
    }
    
}