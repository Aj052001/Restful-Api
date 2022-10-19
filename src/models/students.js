const mongoose = require('mongoose')
const validator = require('validator')

//create schema
const studentSchema = new mongoose.Schema({
    name:{type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value)
        {
    
            if(!validator.isEmail(value)){
              throw new Error(console.log("invalid email"))      
            }
            
        }
    },
    phone:{
type:Number,
min:10,
required:true,
unique:true,
    },
   address:{
    type:String,
    required:true,
   },
   date:{
    type:Date,
    default:Date.now
}
})


//create model
const Student = new mongoose.model("Student",studentSchema);

//exports
module.exports = Student;



