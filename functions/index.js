const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HPuJ4IJJmk2Ma4JM4QyB6Dcs6MdM2zXGv11CAZBiYuXzZY5DNxRvoHPigc3eUfSCDXOEH0y75UVteQWpFu53r0V00eBP2HWK6')


// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOOM!!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // in subunits of the currency
        currency: "usd",
    });

    // OK - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app)