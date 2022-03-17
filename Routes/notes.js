const route = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');



route.get('/',(req,res)=>{
  const data = JSON.parse(fs.readFileSync('db/db.json'));
  res.json(data);

})

route.post('/',(req,res)=>{
    const data = JSON.parse(fs.readFileSync('db/db.json'));
    const newNote = {
        title:req.body.title,
        text:req.body.text,
        id:uuidv4()
    }
    data.push(newNote);
    try {
    fs.writeFileSync('db/db.json',JSON.stringify(data));
    res.json(data);
    }
    catch (err){
      res.status(500).send(err);
    }
})

fs.writeFile('fileName','data',(err,data)=>{

})


route.delete('/'),(req,res)=>{
  const data = JSON.parse(fs.readFileSync('db/db.json'));
  
}




module.exports = route;



