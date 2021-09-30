const Axios = require('Axios');
const express = require('express');
const router = express.Router();

const config = {
    headers: {
        'Content-Type': 'application/json',
        "TPSRole": "salesIntegration",
        "TPSAuthenticate": "Handler eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnRlZ3JhdGlvbl9wYXJ0bmVyIjoiZDcxOTE3ZjctZWRiZC00MjFjLThlZTAtMjhjODc0OGI5NDNlIiwiaWF0IjoxNjMyNTQ0NDI4fQ.kbOpoIdeW10cXLXAcuqyymWtC3cvI8rUHZxAiHsMSes"
    }
};


router.get("/TPSMonthly", async (req, res, next) => {
    try {
        let getMonthlyCost = await Axios.get("https://cloud-shipping-api.herokuapp.com/analytics/transactions/cost/monthly?year=2021", config)
        console.log(getMonthlyCost.data)
        res.status(200).send(getMonthlyCost.data.payload.transactions)
    } catch (err) { console.log(err) }
})

router.get("/TPSYearly", async (req, res, next) => {
    try {
        let getYearlyCost = await Axios.get("https://cloud-shipping-api.herokuapp.com/analytics/transactions/cost/yearly", config)
        console.log(getYearlyCost.data)
        res.status(200).send(getYearlyCost.data.payload)
    } catch (err) { console.log(err) }
})

module.exports = router