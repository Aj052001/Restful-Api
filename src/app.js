const express = require("express");
const app = express();
require("./db/conn");

const router = require("./routers/student")
const port = process.env.PORT || 3000;
app.use(express.json());



 //3. we need to register our router
 app.use(router);


app.listen(port, () => {
  console.log(`listening on ${port} ......`);
});
