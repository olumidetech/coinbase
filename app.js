const express = require('express');
const app = express();
const bodyParser  = require("body-parser");
app.use(express())
app.use(bodyParser.json())

app.post('/login', (req, res) => {
    console.log(req.body)
    //send
   res.json(JSON.stringify(req.body));
});

// start the server
app.listen(3000, () => {
    console.log('Server started on port 3000')
});
