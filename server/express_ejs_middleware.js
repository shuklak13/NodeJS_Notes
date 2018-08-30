var express = require('express')
var app = express();
app.set('view engine', 'ejs')

// Middleware - this runs before res.render in any of the HTTP calls below
/*  below is a prebuilt middleware function from express, called static()
    that fetches static assets from the provided folder                 */
// app.use(express.static('assets'))
app.use('/assets', express.static('static'))
/*  below is a custom middleware function we created,
    to log any url rqeuest sent to our website      */
// app.use('/', function(req, res, next){
//     console.log(req.url);
//     next(); // next() tells us
// }) 

app.get('/', function(req, res){ res.render("index") })

// parsing a query string in Express
// try it out with http://localhost:3001/contact?person=joe&dept=marketing
app.get('/contact', function(req, res){
    console.log(req.query)
    res.render('contact', {query_string: req.query}) 
})

app.get('/profile/name/:name', function(req, res){
    data = {   
        person: req.params.name,
        info: { age: 20, job: 'ninja', hobbies: ['eating', 'fighting'] }
    }
    res.render('profile', data)
})
app.get('/hidden', function(req, res){res.send('you found the hidden page!') })
app.listen(3001)