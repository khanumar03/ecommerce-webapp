const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")

const stripe = require("stripe")("stripe secret key");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) =>
  response.status(200).send("hello world!!!")
);

app.get("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request:", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    currency: "inr",
  });

  return response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
