var express = require('express')
var app = express();

/* EJS is a common, lightweight templating engine
    (view engine = templating engine)
    .ejs files (located in the `views` directory) use HTML format
        you can insert Javascript inside of them with <% %>
        and you can use data passed from a Javascript program with <% =data %>
*/
app.set('view engine', 'ejs')

/* HTML requests are easy to make in Express
    app.get('route', function)
    app.post('route', function)
    app.delete('route', function)
*/
app.get('/', function(req, res){ res.sendFile(__dirname + "/index.html") })
app.get('/contact', function(req, res){res.send('this is the contact page') })
app.get('/profile/id/:id', function(req, res){
    res.send('You requested the profile for id ' + req.params.id)
})
app.get('/profile/name/:name', function(req, res){
    data = {   
        person: req.params.name,
        info: { age: 20, job: 'ninja', hobbies: ['eating', 'fighting'] }
    }
    res.render('profile', data)
    // res.render(filename, data) - allows us to use EJS templates
        // filename - relative to the views directory
        // data - used to insert data into the template
})
app.get('/hidden', function(req, res){res.send('you found the hidden page!') })
app.listen(3001)