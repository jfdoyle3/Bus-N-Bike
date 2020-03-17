const express = require('express'),
      server=express (),
      cors=require('cors'),
      mongoose=require('mongoose'),
      colors=require('colors'),
      path=require('path'),

      home=require('./routes/home.route'), 
      bus=require('./routes/bus.route'),
      location=require('./routes/geolocation.route');

server.use(cors());
server.use(express.json());

server.use("/home",home); 
server.use("/bus",bus); 
server.use("/location",location);     

server.listen(5000, () =>{
  console.log('localhost:5000');
});