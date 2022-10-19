const express = require('express')
const Student = require("../models/students");
 //1. create a new router
 const router = new express.Router();

 //CRUD OPERATION
// 1. C = create a new student   1. promise method
router.post("/students", (req, res) => {
  console.log(req.body);
  /* promise method */
  const user = new Student(req.body);
  user.save().then(()=>{
           res.status(201).send(user);
  }).catch((err)=>{
          res.status(400).send(err);
  });

});

//2. async method
// router.post("/students", async(req, res) => {
//     try {
//       const user = new Student(req.body);
//       const createUser = await user.save();
//       res.status(201).send(createUser);
//     } catch {
//       (err) => {
//         res.status(400).send(err);
//       };
//     }
//   });
  
  // 2. R = read data
  router.get("/students", async (req, res) => {
    try {
      const studentsData = await Student.find();
      res.status(201).send(studentsData);
    } catch {(err) => {
        res.status(400).send(err);
      };
    }
  });
  
  //get the eindivisual  student data  by id
  // router.get("/students/:id", async (req, res) => {
  //     try {
  //      const _id  = req.params.id;
  //    const studentData = await Student.findById(_id);
  //   //  console.log(studentData);
  //    if(!studentData)
  //    {
  //     return res.status(404).send();
  //    }
  //    else{
  //     res.send(studentData);
  //    }
  //     } catch {(err) => {
  //         res.status(500).send(err);
  //       };
  //     }
  //   });
  //get the eindivisual  student data  by name
  router.get("/students/:name", async (req, res) => {
      try {
       const name  = req.params.name;
     const studentData = await Student.findOne({name});
     if(!studentData)
     {
      return res.status(404).send();
     }
     else{
      res.status(200).send(studentData);
     }
      } catch {(err) => {
          res.status(500).send(err);
        };
      }
    });
  
  
    //update students by its name
    router.patch("/students/:name", async (req, res) => {
      try {
        const name  = req.params.name;
        const updatesData = await Student.findOneAndUpdate({name},req.body,{new:true});
        res.status(201).send(updatesData);
      } catch {(err) => {
          res.status(400).send(err);
        };
      }
    });
  
  
    //delete students by its name
    router.delete("/students/:name", async (req, res) => {
      try {
        const name  = req.params.name;
        const deleteData = await Student.findOneAndDelete({name},req.body);
        if(!name)
        {
          return res.status(400).send();
        }
        else{
          res.status(201).send(deleteData);
        }
      
      } catch {(err) => {
          res.status(400).send(err);
        };
      }
    });

 module.exports = router;