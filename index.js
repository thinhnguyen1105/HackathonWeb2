const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

mongoose.connect(config.mongoPath, (err) => {
    if (err) console.error(err);
    else console.log('Database connect successful');

})

const port = process.env.port || 6969;

app.listen(port, err => {
    if (err) console.log(err);
    console.log('Server started at port ' + port);
});