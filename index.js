const express = require('express')
const test=require('./incomeDetails')
const cors = require("cors");
const app = express()
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/incomedetails", (req, res) => {
  console.log(req.body,'index');
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// pass:Eom6SWvUoUnIobzG
// user:mainul