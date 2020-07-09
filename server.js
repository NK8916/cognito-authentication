const express = require("express");
const app = express();
const bodyParser=require('body-parser')
const PORT=3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes=require('./routes')

app.use('/auth',routes)

app.listen(PORT,()=>{
    console.log(`Server is listening at port ${PORT}`)
})
