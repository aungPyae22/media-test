const http = require('http');
const url = require('url');
require('dotenv').config();

const routes = {
    "GET" : {
        "/" : (res,req) => {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end("<h1>This is none page</h1>")

            {console.log("this is /path")}
        },
        "/Home":(req,res)=>{
            res.writeHead(200,{'Content-Type':'text/html'});

            res.end("<h1>This is homeSenior page</h1>")

            console.log("this is /home path")}
    },
    "POST":{
        "/About" :(req,res) => {
            res.writeHead(200,{'Content-Type':'text/html'});

            res.end("<h1>This is about page</h1>");

            {console.log("This is /about path")}
        },
        "/":(req,res)=>{

            res.writeHead(200,{'Content-Type':'text/html'});

            res.end("<h1>This is home page</h1>");
            {console.log("This is normal path")}
        }
    },
    "None": (req,res) => {

        res.writeHead(404)
        console.log("error 404")
    }
}
const severRequest =(req,res) => {    
    let reqMethod = req.method;
    const urlRE = url.parse(req.url,true);
    const resolve = routes[reqMethod][urlRE.pathname];
    if(resolve != null && resolve != undefined){
        resolve(req,res);
    }else{
        routes["None"](req,res);
    }

    
    
}

const server = http.createServer(severRequest);


server.listen(process.env.PORT,() => {
    console.log(`sever is running ${process.env.PORT}`)
});