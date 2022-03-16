const express = require('express');
const PORT = process.env.PORT || 3001;
const path = require('path');
const api = require('./Routes/index');

const app = express();

//MiddleWare for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended:true }));



app.use(express.static('public'));

// USE route for API 
app.use('/api',api);

// GET route for homepage
app.get('/',(req,res)=>
  res.sendFile(path.join(__dirname,'/public/index.html'))
);
// Get Route for notes
app.get('/notes',(req,res)=>
  res.sendFile(path.join(__dirname,'/public/notes.html'))
);

//GET route for WildCard endpoint

app.get('/*',(req,res)=>
  res.status(404).sendFile(path.join(__dirname,'/public/404.html'))
);

app.listen(PORT, function(err){
  if (err) console.log(err);
  console.log(`App listening at http://localhost:${PORT} 🚀`)

});