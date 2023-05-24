const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on things.');
});
/*Dynamic routes
app.get('/things/:name/:id', function(req, res) {
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});*/
router.post('/', function(req, res){
   res.send('POST route on things');
});
app.put('/user', (req, res) => {
   res.send('Got a PUT request at /user')
});
app.delete('/user', (req, res) => {
   res.send('Got a DELETE request at /user')
});
//Other routes here
app.get('*', function(req, res){
   res.send('Error');
});

//export this router to use in our index.js
module.exports = router;