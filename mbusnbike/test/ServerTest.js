const expect  = require('chai').expect,
      request = require('request');



// Group Testing - Grouped by Routes

describe('localhost/ and About Status', () =>{
    describe ('localhost/', () =>{
        it('status', (done)=>{
            request('http://localhost:8080/', (error, response, body) =>{
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe ('About page', () =>{
        it('status', (done)=>{
            request('http://localhost:8080/about', (error, response, body) =>{
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    }); 
});