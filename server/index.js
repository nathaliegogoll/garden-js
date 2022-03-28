require('dotenv').config()
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001

app.use(cors());

app.get('/', (req, res) => {
    res.json({"message": "hello"});
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});