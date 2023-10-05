const Razorpay = require('razorpay');
const crypto = require('crypto');
const paymentCltr = {}
// 1st create an order for payment
paymentCltr.createOrder = (req, res) => {
    const body = req.body
    var instance = new Razorpay({ key_id: process.env.rzp_key_id, key_secret: process.env.rzp_key_secret })

    var options = {
        amount: body.amount * 100,  // amount in the smallest currency unit paise
        currency: "INR"
    };
    instance.orders.create(options, function (err, order) {
        if (err) {
            res.status(500).json({ message: "bad request" })
        } else {
            res.status(200).json({ message: "order craeted", orderData: order })
        }
    });
}
// 4th step 
paymentCltr.verifyOrder = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body

    const hmac = crypto.createHmac('sha256', process.env.rzp_key_secret);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id, process.env.rzp_key_secret);
    const generated_signature = hmac.digest('hex')

    if (generated_signature == razorpay_signature) {
        res.status(200).json({ message: "successful" })
    } else {
        res.status(400).json({ message: "failed" })
    }

}
module.exports = paymentCltr