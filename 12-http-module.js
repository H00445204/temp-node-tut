//HTTP Module is used to create a server and send requests and responses 
const http = require('http');

//callback function is used to get the request and response from the server 
const server = http.createServer((req,res)=>{
    //console.log(req); //output: request object with all the information about the request
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('Here is our short history');
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `)
    /* here we can write the response in the if statement but it is not a good practice
    //write response to the browser -- open the browser and type localhost:5000 to view the output
    res.write('Welcome to our home page');
    //end the response
    res.end();*/
})
server.listen(5000)//port number is used to listen to the server 