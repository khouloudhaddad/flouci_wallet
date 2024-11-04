const axios = require("axios")

module.exports = {
    Add: async (req, res) => {
        const url = "https://developers.flouci.com/api/generate_payment";
        const payload = {
            "app_token": process.env.FLOUCI_TOKEN,
            "app_secret" : process.env.FLOUCI_SECRET,
            "amount": req.body.amount,
            "accept_card":"true",
            "session_timeout_secs": 1200,
            "success_link": "http://localhost:5000/success",
            "fail_link": "http://localhost:5000/fail",
            "developer_tracking_id": process.env.FLOUCI_ID
        }
        
        await axios.post(url, payload)
        .then((result) => {
            res.send(result.data)
        })
        .catch(err => console.log(err));
    }
}