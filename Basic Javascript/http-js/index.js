const http = require('http');

const app = http.createServer((req,res)=>{
    if(req.url=='/'){
        console.log('Home Page');
        res.end('Home Page');
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<marquee><h1 style="color:blue;">CREATING HTTP SERVER</h1></marquee><br><a href="/">Go to Home Page</a>');
    }
});

app.listen(8080,()=>{
    console.log('Server running at http://localhost:8080/');
});
