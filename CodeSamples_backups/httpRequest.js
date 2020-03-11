const http=require('http');

http.createServer((req,res)=>{
    const {method, url, headers} = request;
    let body=[];
    request.on('error', (err)=> {
        console.err(err);
    }).on('data', (chunk)=>{
        body.push(chunk);
    }).on('end',()=>{
        body=Buffer.concat(body).toString();
    });
}).listen(8080);