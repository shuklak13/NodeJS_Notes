# Package.json

To create a `package.json` file, run `npm init`. This file can be used to store a list of module dependencies for your package. When you run `npm install`, npm automatically reads and installs the dependencies listed in `package.json`.

To add a module dependency to `package.json`, use the command `npm install <module> -save` when installing the module.

For example, `express_example.js` requires express, so you should install it using `npm install express -save`, or simply `npm install` since express is already in `package.json`.

# Templates

Templates are HTML that can have Javascript inside of them with `<% %>`. Data can be passed from Javascript programs into templates with `res.render(filename, data)`, where `data` is a Javascript object and `filename` is a template file in the `views` directory. Those objects can then be accessed from the template using `<%= %>`.

To use templates, import Express with `var express = require('express')`, create an Express app with `var app = express()`, and set the template engine with `app.set('view engine', engine)`. We use the `'ejs'` template engine in this code.

## Partial Templates

Partial templates are stored in the `views/partial` directory. They can be used by your other templates as a sort of shared base using `<% include partials/[[partial_template.ejs]] %>`

# Query Strings

    mysite.com/contact?person=ryu&dept=marketing

`person` and `dept` are argument names; `ryu` and `marketing` are the passed-in values; `?` acts as a separator between the route and the arguments; `&` acts as a separator between arguments.