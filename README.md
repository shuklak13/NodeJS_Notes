# V8 Engine

Node.js code is *interpreted* (not compiled!) by Google's open-source **V8 engine**, written in C++, which converts Javascript code to native machine code.

Why? Bescause Javascript was intended to be run in the browser, not in the server, unlike C++. V8 connects these two, and is used by Node.js to give Javascript the low-level functionality needed to be a useful server language.

# MVC

* **Model** - the internal structure - the data access logic as well as the data itself
* **View** - the interface the user sees (ex: template files)
* **Controller** - the interface between the View and the Model; "controls" how the View can access the Model

# Directories

## [Intro](https://www.w3schools.com/nodejs)

This directory contains an introduction to Node.js, and discusses creating HTTP servers, creating modules, parsing urls, serving HTTP files, and installing npm modules.

## [Server]((https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp))

This directory contains examples of servers that serve HTML, JSON, and plain text. It also demonstrates routing, an index page, a 404 page, how to manage dependencies with `npm` and `package.json`, how to route with Express, how to use templates and partial templates with EJS, how to hyperlink, how to use `styles.css`, and how to parse query strings.

## [HTML_DOM](https://www.w3schools.com/js/js_htmldom.asp)

This directory contains a reference to common functionality in the HTML DOM, as well as a sample HTML file demonstrating some obasic usage. It also explains tags, ids, classes, hooks, div, and span.
