module.exports = {
    Add: async (req, res) => {
        const url = "developers.flouci.com/generate_payment";
        const payload = {
            "app_token": "<APP_TOKEN>",
            "app_secret" : "<APP_SECRET>",
            "amount": "1000",
            "accept_card":"true",
            "session_timeout_secs": 1200,
            "success_link": "<https://exemple.website.com/success>",
            "fail_link": "<https://exemple.website.com/fail>",
            "developer_tracking_id": "<your_internal_trackning_id>"
        }
        res.send('OK');
    }
}