const PaymentInitialization = require("../../models/gpay/PaymentInitialization");
const GPUser = require("../../models/gpay/Users/GPUsers");
const { generateFake } = require("../../faker/dataFaker")

exports.setPaymentDetails = (req, res) => {
    let { transactionAmount, currency, paymentMethod, billingAddress } = req.body;
    if (transactionAmount && currency && paymentMethod) {
        let paymentDet = new PaymentInitialization({
            transactionAmount: transactionAmount,
            currency: currency,
            type: paymentMethod.type,
            brand: paymentMethod.brand,
            last4digits: paymentMethod.last4Digits,
            street: billingAddress.street,
            city: billingAddress.city,
            state: billingAddress.state,
            postalCode: billingAddress.postalCode,
            countryCode: billingAddress.countryCode
        })

        paymentDet.save().then(resp => {
            res.status(200).json({ msg: "payment detail created successfully", data: resp, transactionId: resp._id })
        }).catch(err => {
            if (res.status == 5) {
                res.status(500).json({ msg: "something went wrong" })
            } else {
                res.status(err.status).json({ error: err })
            }
        })
    }

}

exports.getPaymentDetails = (req, res) => {
    let { transactionId } = req.body;

    if (transactionId) {
        PaymentInitialization.findById(transactionId).then(transaction => {
            if (transaction) {
                res.status(200).json({
                    data: { transaction }
                })
            } else {
                res.status(400).json({
                    msg: "no data found"
                })
            }
        }).catch(err => {
            if (err.status) {
                res.status(err.status).json({
                    msg: "something went wrong",
                    error: err
                })
            }
            else {
                res.status(500).json({
                    msg: "something went wrong",
                    error: err
                })
            }
        })
    }
}

// tokenization schema:
// _id,transactionAmount,paymentMethod,createdAt,

//header
//payload - issuer, expiration time, subject, audience

exports.createUsers = (req, res) => {
    let { userCount } = req.body;
    let userArray = [];

    for (let index = 0; index < userCount; index++) {
        let compName = generateFake("company-name");
        let email = compName.split(" ")[0] + '@gmail.com'
        let password = 'password123'

        let user ={
            companyName: compName,
            email: email,
            password: password
        }

        userArray.push(user);
    }

    if(userArray.length){
        GPUser.collection.insertMany(userArray).then(docs=>{
            res.status(200).json({msg:"created users successfully",data:docs})
        }).catch(err=>{
            res.status(500).json({msg:"something happend try again"})
        })
    }
}
