const server = require('express')();

const bus=require('./routes/bus.route');

server.use("/bus",bus);       

server.listen(5000, () =>{
  console.log('localhost:5000');
});