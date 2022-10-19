const mongoose = require('mongoose')
const validator = require ('validator')
mongoose.connect("mongodb://localhost:27017/syudents-api").then(()=>{
    console.log("connection is successfully ....")
}).catch((err)=>{
    console.log("No connection ....")
});
