const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HPuJ4IJJmk2Ma4JM4QyB6Dcs6MdM2zXGv11CAZBiYuXzZY5DNxRvoHPigc3eUfSCDXOEH0y75UVteQWpFu53r0V00eBP2HWK6')

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOOM!!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, 
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app)