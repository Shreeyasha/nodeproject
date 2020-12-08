// const express= require('express');
// const bodyParser= require('body-parser');

// const app= express();
// const port=8000;

// let blogs=[{
//     id:1,
//     title:"hello"
// },
// {
//     id:2,
//     title:"world"
// }
// ];

// let blogs=[];

// app.use(bodyParser.json());

// app.get('/blog',(request,response)=>{
//     response.json(blogs)
// });


//     app.get('/blog',(request,response)=>{
//         let myObject={
//             name: 'Shreeyasha',
//             age:20

//         }
//         let (name,age=myObject);
//         response.json(blogs)
//     });
//     app.post('/blogs/:id',(request,response)=>{
//         response.json({data:request.body})
//     });

//     app.put('/blogs',(request,response)=>{
//         response.json({method:request.method})
//     });

// app.get('/blog/:id',(request,response)=>{
//     let data =blogs.filter((value)=>value.id== request.params.id)
//     if(!data[0]){
//         return response.status(404).json({error:"Data not found"})
//     }
//     response.json(data[0]);
// })

// app.listen(port,()=>{
// console.log(`App is running on port: ${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 8000;



let blogs = [{
	id: 1,
	title: 'hello'
},
{
	id: 2,
	title: 'world'
}];




app.use(bodyParser.json());


// query all stored blogs
app.get('/blog',(req, resp) => {
	resp.json(blogs);
});

	

// store a blog
// app.post('/blog',(req, res) => {
// 	res.json({method: req.method});
// 	// let {title} = req.body;
// 	let title = req.body.title;
// 	let data = {
// 		id: blogs.length + 1,
// 		title: title
// 	}
// 	blogs.push(data)
// 	res.json(data);
// });

	app.post('/blog',(req,res)=>{
		let {title}= req.body
		let data ={
			id: blogs.length+ 1,
			title
		}
		blogs.push(data);
		res.json(data)
	})
	
//  update a blog by id


app.put('/blog/:id',(req, res) => {
	res.json({method: req.method});

	let blog = blogs.filter((value, index) => {
		return value.id === parseInt(req.params.id)
	});
	if(!blog[0]){
		return res.status(404).json({error: 'Data not found'});
	}
	let title = req.body.title;
	blogs.forEach((value, index) => {
		if(value.id === parseInt(req.params.id)){
			blogs[index].title = title;
		}
	})
	res.json({id: req.params.id, title:title});
});

// 	app.put('/blog/:id',(req,res)=>{

// 		let blog = blogs.filter((value,index)=>{
// 			return value.id=== parseInt(req.params.id)
// 		});
// 		if(!blog[0]){
// 			res.status(404).json({error:'Not found'})
// 		}
// 		let {title}= req.body
// 		blogs.forEach((value,index)=>{
// 			if(value.id=== parseInt(req.params.id)){
// 				blogs[index]= title
// 			}
// 		})
// 			res.json({id: req.params.id, title})

// 	})

// get a blog by id 

app.get('/blog/:id', (req, res) => {
	let data = blogs.filter((value) => 
	value.id === parseInt(req.params.id)
	);
	if(!data[0]){
		return res.status(404).json({error: 'Data not found'});
}
res.json(data[0]);
});

	// app.get('/blog/:id',(req,res)=>{
	// 	let blog = blogs.filter((value)=>{
	// 		value.id=== parseInt(req.params.id)
	// 	})
	// 	if(!data[0]){
	// 		return res.status(404).json({error:'data not found'})
	// 	}
	// 	res.json(data[0]);
	// })

// delete a blog 
// app.delete('/blog/:id', (req, res) => {
// 	res.json({method: req.method});
// 	let blog = blogs.filter((value, index) => {
// 		return value.id === parseInt(req.params.id)
// 	});
// 	if(!blog[0]){
// 		return res.status(404).json({
// 			error: 'Data not found'
// 		});
// 	}
// 	let deleteIndex;
// 	blogs.forEach((value, index) => {
// 		if(value.id === parseInt(req.params.id)){
// 			deleteIndex = index;
// 		}
// 	})
// 	blogs.splice(deleteIndex, 1);
// 	res.status(204).json({});
// })

app.delete('/blog/:id',(req,res)=>{

	let blog= blogs.filter((value,index)=>{
		return value.id===parseInt(req.params.id);
	})
	if (!blogs[0]){   
		// this also refers to (!blogs.length===0)
		return res.status(404).json({error:'Data not found'})
	}
	let deleteIndex;
	blogs.filter((index,value)=>{
		if(value.id=== parseInt(req.params.id)){
			deleteIndex=index;
		}
	})
	blogs.splice(deleteIndex,1);
	res.status(204).json({})
})


app.listen(port, () => {
	console.log(`Application is running on port: ${port}`);
})