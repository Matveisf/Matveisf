const http = ("http");

function sitioweb(req, res)
{
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Mi primer servidor");
}

let servidor = http.createServer(sitioweb);

servidor.listen(127.0.0.1);

console.log("Servidor corriendo)