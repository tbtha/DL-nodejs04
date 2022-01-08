const fs = require("fs")
const http = require("http")
const url = require("url")
const jimp = require("jimp")

const server = http.createServer((req,res) => {
    const params = url.parse(req.url,true).query
    const {urlImage} = params

    if(req.url == "/"){
        res.writeHead(200,{'Content-Type': 'text/html'})
        fs.readFile("index.html",(err,data)=>{
            res.end(data)
        })
    }
    if(req.url.includes("/style")){
        res.writeHead(200,{'Content-Type': 'text/css'})
        fs.readFile("estilo.css",(err,data)=>{
            res.end(data)
        })
    }
    if(req.url.includes("/imagen")){
        jimp.read(urlImage,(err,imagen)=>{
        imagen
        .quality(60)
        .grayscale()
        .resize(350,jimp.AUTO)
        .writeAsync('newImg.jpg')
        .then(()=>{
            res.writeHead(200,{'Content-Type': 'image/jpeg'})
            fs.readFile("newImg.jpg",(err,data)=>{
            res.end(data)
        
            })
        })
        })
        

    }


})

const puerto = 3030
server.listen(puerto,
    () => console.log('Servidor activo'))