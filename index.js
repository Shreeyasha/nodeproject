const http = require('http');
const url= require('url');

let server = http.createServer((request,response)=>{
    let queryObject=url.parse(request.url,true).query;
    if(request.url === '/profile'){
        response.writeHead(200,{'content-type':'text/html'});
        response.write('<html><body><h1>Hello ${queryObject.name}</h1><p>This is profile page</p></body></html>');
        response.end();
    // }else if(request.url === '/profile') {
    //         response.writeHead(200, {'content-type' : 'text/html'});
    //         response.write('<html><body><h1>Hello IIMS</h1><p>This is profile page</p></body></html>');
    //         response.end();
    // }else{
    //     response.writeHead(404,{'content-type':'text/html'});
    //     response.write('<html><body><h1>404 Page not found </h1> </body></html>')
    //     response.end();
    // }
// });

// server.listen(8000);
// console.log('Server is running on port:',8000);


// let blog={
//     title:'',
//     author:'',
//     userId:'',
//     created_at:'',
//     updated_at:'',
// }


REST API 
Routes            |   RequestMethod |    Description 
/blog                    GET             (query get all blogs);
/blog                    POST            (store a blog);
/blog/:id                 PUT/PATCH       (update a blog)
/blog/:id                 DELETE          (delete a blog with id)
/blog/:id                 GET             (get a blog by id)
