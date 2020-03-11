const express = require('express')
      server=express (),
      cors=require('cors'),
      mongoose=require('mongoose'),
      colors=require('colors'),
      path=require('path');


      server.use(cors());
      server.use(express.json());
//Routes
const bus=require('./routes/bus.route'),
      location=require('./routes/geolocation.route');


server.use("/bus",bus); 
server.use("/location",location);     

server.listen(5000, () =>{
  console.log('localhost:5000');
});