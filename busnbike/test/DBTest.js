// const expect  = require('chai').expect,
//       request = require('request'),
//       mongoose=require('mongoose'),
//       Schema=mongoose.Schema,
//       secureEnv=require('secure-env'),
//       assert=require('assert');

// global.env=secureEnv({secret: 'Bu5NB1k3'});

// // global.env.DBURI
// // import your Model to test
// const FavPlace=require('../models/favorites/favPlace');

// describe('Test Write & Read from Favoites',() =>{
//       describe('Creating a Record', ()=>{
//     it ('Add a Record', (done) =>{
//         // assertion is not included in mocha so
//         // require assert which was installed along with mocha
//         const fPlace=new FavPlace({name: 'No Place Like Home', location: '12.12 -12.13'});
//         fPlace.save()  // takes some time to return  a promise
//               .then(()=>{
//                 assert(!fPlace.isNew);
//                 done();
//               });
//       });
//     });
// });