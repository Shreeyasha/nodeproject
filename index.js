const http = require('http');
const url= require('url');
let server = http.createServer((request,response)=>{
  let queryObject = url.parse(request.url,true).query;
  response.writeHead(200,{'content-type':'text/html'})
    response.write(`<html><body><h1>Welcome to my profile ${queryObject.name}. Your age is ${queryObject.age}</h1></body></html>`)
    response.end();

  // if (request.url==='/'){
  //   response.writeHead(200,{'content-type':'text/html'})
  //   response.write('<html><body><h1>This is route page </h1></body></html>')
  //   response.end();

  // }
  // else if(request.url==='/profile'){
  //   response.writeHead(200,{'content-type':'text/html'})
  //   response.write('<html><body><h1>Welcome to my profile </h1></body></html>')
  //   response.end();

  // }
  // else{
  //   response.writeHead(404,{'content-type':'text/html'})
  //   response.write('<html><body><h1>Page not found  </h1></body></html>')
  //   response.end();

  // }

});
server.listen(8000);
console.log("Server is running on port",8000)





// -----


// let blog={
//     title:'',
//     author:'',
//     userId:'',
//     created_at:'',
//     updated_at:'',
// }


// REST API 
// Routes            |   RequestMethod |    Description 
// /blog                    GET             (query get all blogs);
// /blog                    POST            (store a blog);
// /blog/:id                 PUT/PATCH       (update a blog)
// /blog/:id                 DELETE          (delete a blog with id)
// /blog/:id                 GET             (get a blog by id)

// const express = require('express');

// const app = express();
// const port = 8000;

// let blogs = [{
// 	id: 1,
// 	title: 'hello'
// },
// {
// 	id: 2,
// 	title: 'world'
// }];


// app.get('/blog',(req, resp) => {
// 	resp.json(blogs);
// });

// app.post('/blog',(req, res) => {
// 	res.json({method: req.method});
// });

// app.put('/blog/:id',(req, res) => {
// 	res.json({method: req.method});
// });

// app.get('/blog/:id', (req, res) => {
// 	let data = blogs.filter((value) => value.id === parseInt(req.params.id));
// 	if(!data[0]){
// 		return res.status(404).json({error: 'Data not found'});
// 	}
// 	res.json(data[0]);
// })

// app.delete('/blog/:id', (req, res) => {
// 	res.json({method: req.method});
// })

// app.listen(port, () => {
// 	console.log(`Application is running on port: ${port}`);
// })

// const mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Mongodb connected');
// });