//const  express = require('express'),
//       router=express.Router(),
//       server = express(), 
//       mongoose=require('mongoose'),
//       BodyParser = require("body-parser"),
//       colors=require('colors'),
//  //    {MongoClient} = require("mongodb").MongoClient,
//  //     ObjectId = require("mongodb").ObjectID,
//       path=require('path');



// app.get('/googlelocation', (req, res) => {

//   const baseUrl = 'https://maps.googleapis.com/maps/api/js?';

//   const apiKey = 'key='+global.env.GOOGLEMAPSAPI;
//   const callBack="&callback=initMap";
//   const googleUrl=baseUrl+apiKey+callBack;

 //  console.log(googleUrl);
//    const userLocation = (url1, url2, zipcode) => {
//       let newUrl = url1 + zipcode + url2;
//       return newUrl;
//    };	
	
//    const apiUrl = userLocation(baseUrl, apiId, zipcode);
	
//    fetch(apiUrl)
//    .then(res => res.json())
//    .then(data => {
//       res.send({ data });
//    })
//    .catch(err => {
//       res.redirect('/error');
//    });
//})