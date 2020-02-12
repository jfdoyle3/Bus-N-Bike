//const secureEnv=require('secure-env'),
 //     express = require('express'),
 //     server = express(), 
 //     cors=require('cors'),
 //     mongoose=require('mongoose'),
 //     colors=require('colors'),
  //    path=require('path');



//server.use(cors());
//server.use(express.json()); // Make sure it comes back as json


// need to provide the proper ENV for the DB connection String.
// const uri=process.env.ATLAS_URI;
// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   });
//   const connection=mongoose.connection;
//   connection.once('open', ()=>{
//       console.log("Database is connected");
//   });


// Code below here:

// Change these to the routes for project
// Routes: to Databases
// 1st: Require routes
 //const usersRouter=require('./routes/users.route');
       
    
// 2nd: Use routes: Creates localhost/execises and /users
// server.use('/exercises',exercisesRouter);
// server.use('/users',usersRouter);

//Working testing code.
//server.get('/resistance', (req, res) => res.send({resistance:'is futile!'}));
//server.get('/hey', (req, res) => res.send('ho!'));
//server.get('/api/hello', (req, res) => {
//  res.send({ express: 'Hello From Express' });
//});

//server.post('/api/world', (req, res) => {
//  console.log(req.body);
//  res.send(
//    `I received your POST request. This is what you sent me: ${req.body.post}`,
//  );
//});

//Launch listening server on port 5000
//server.listen(5000, () =>{
 // console.log('localhost:5000');
//});