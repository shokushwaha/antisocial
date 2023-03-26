const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const CHAT_ENGINE_PROJECT_ID = "878e32c8-406f-47a8-8ddc-be8ced18a9bd";
const CHAT_ENGINE_PRIVATE_KEY = "1c497fab-7dc4-487a-9fdb-993c87660694";

app.use(express.json());
app.use(cors({ origin: true }));


app.post("/signup", async (req, res) => {
    const { username, secret, email, first_name, last_name } = req.body;

    try {
        const r = await axios.post(
            "https://api.chatengine.io/users/",
            { username, secret, email, first_name, last_name },
            { headers: { "Private-Key": CHAT_ENGINE_PRIVATE_KEY } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

app.post("/login", async (req, res) => {
    const { username, secret } = req.body;

    try {
        const r = await axios.get("https://api.chatengine.io/users/me/", {
            headers: {
                "Project-ID": CHAT_ENGINE_PROJECT_ID,
                "User-Name": username,
                "User-Secret": secret,
            },
        });
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});
const PORT = 3001 || 5000
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`)
})