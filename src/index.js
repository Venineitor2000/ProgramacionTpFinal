var express = require('express');
var productosRouter = require("./routes/productosRoutes");
var productoController = require("./controllers/productoController")

var app = express();
var port = 3000;

app.use(express.json());
app.use("/api/productos",productosRouter);

app.listen(port, function(){
    console.log("Parece que anda el purto "+port);
});