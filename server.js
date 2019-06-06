const express = require('express');
const fs = require('fs');
const port = process.env.PORT || 3000;


const app = express();



require('./config/index')(app);
require('./routes/index')(app);


app.listen(port, () => {
    console.log("Det virker måske");
});