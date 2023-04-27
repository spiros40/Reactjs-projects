const express = require('express');
const app = express();
const port = 3001;
// const http=require("http");
//next allows to continue to next request

//you must write use from top to bottom
app.use("/product",(req,res, next)=>{

});
app.use("/",(req,res, next)=>{

});

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
  });

app.post('/', (req, res) => {
    res.send('Got a POST request')
});
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
});
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
});

// const server=http.createServer(app); 


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });
// app.get('/:id', function(req, res){
//     res.send('The id you specified is ' + req.params.id);
//   });

// app.post('/', (req, res) => {
//     res.send('Got a POST request')
// });
// app.put('/user', (req, res) => {
//     res.send('Got a PUT request at /user')
// });
// app.delete('/user', (req, res) => {
//     res.send('Got a DELETE request at /user')
// });
  
