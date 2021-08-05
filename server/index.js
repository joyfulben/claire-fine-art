const express = require("express")
const app = express()
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

app.post("/payment", cors(), async (req, res) => {
  let {amount, id} = req.body
  console.log(res);
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Two Sky Studio",
      payment_method: id,
      confirm: true
    })

    res.json({
      message: "Payment Successful",
      success: true
    })

  } catch (e) {
      console.log("Error", e)
      res.json({
        message: "Payment Failed",
        success: false
      })
  }
})

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is listening on port 4000")
})
