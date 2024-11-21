const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./index.html', (err)=>{
    if(err){
        console.log(err);
        return;
    }
});
const homeStyles = fs.readFileSync('./styles.css', (err)=>{
    if(err){
        console.log(err);
        return;
    }
});
const homeLogo = fs.readFileSync('./logo.svg', (err)=>{
    if(err){
        console.log(err);
        return;
    }
});
const homeLogic = fs.readFileSync('./browser-app.js', (err)=>{
    if(err){
        console.log(err);
        return;
    }
});


const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    }
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homeLogic);
        res.end();
    }
    else if(url=== '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeStyles);
        res.end();
    }
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.write(homeLogo);
        res.end();
    }
    else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();
    } else{
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>404, Resource Not Found</h1>');
        res.end();
    }
})

server.listen(5000,()=>{
    console.log('Server listening at port 5000.')
})