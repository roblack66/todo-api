import express from 'express';

// create an express app
const app = express();

// Define routes

app.get('/hello', (req, res, next) => {
    console.log(req.headers);
    res.json('You visited the hello endpoint')

});

app.get('/goodbye', function (req, res, next) {
    console.log(req.query);
    res.json('same to you')
    
});



// listen for incoming requests
app.listen(3000, function () {
    console.log('App is listening on port 3000')

});