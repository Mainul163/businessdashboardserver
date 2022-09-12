const { MongoClient, ServerApiVersion } = require('mongodb');
const portId= require('./port')
const cors = require("cors");
const express = require('express')
const app = express()
app.use(cors());
app.use(express.json());
const port = process.env.PORT || portId;
const uri = "mongodb+srv://mainul:Eom6SWvUoUnIobzG@cluster0.usqzbcn.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const a = ['a', 'b']
const incomeDetailsFun=async() =>{
    try {
        await client.connect();


        const collData = client.db("incomeDetails").collection("incomeDetailsData");
        
        app.get("/incomedetails",async(req,res)=>{

            const incomeData = collData.find();
            const incomeAllDataList=await incomeData.toArray()
            res.send(incomeAllDataList)
        })

        app.post("/incomedetails", async (req, res) => {
            const incomeDetailsData = req.body
      
            let upDateIncomeDetailsData={}
            upDateIncomeDetailsData.orderType=incomeDetailsData?.orderType
            upDateIncomeDetailsData.amount=parseInt(incomeDetailsData?.amount)
            upDateIncomeDetailsData.year=parseInt(incomeDetailsData?.year)
            
            const data = await collData.insertOne(upDateIncomeDetailsData);
            res.send(data)

        })


        
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
incomeDetailsFun().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
module.exports = a;


