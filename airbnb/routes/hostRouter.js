const express= require('express');
const hostRouter= express.Router();

hostRouter.get("/add-home",(req, res,next)=>{
  res.send(`<h1>Register your home here</h>
    <form action="/host/add-home" method="POST">
      <input type="text" name="houseName" placeholder="Enter the name of your house"/>

      <input type="Submit"/>
    </form>
  `);
});
hostRouter.post("/add-home",(req, res,next)=>{
  console.log(req.body);
  res.send(`<h1>Home registered successfully</h>
    <a href="/">Go to Home</a>
  `);
});
module.exports=hostRouter;