var producto = require("../models/producto");


var GetAllProductos = function(req, res){
    var allProductos = producto.GetAllProductos();
    res.send({satus: 'ok', data: allProductos });
}

var GetOneProducto = function(req, res){
    var {params: { productoId }} = req;
      if (!productoId) {
        console.warn("Id no encontrada");
        return;
      }
      console.log(productoId);
      var productoAux = producto.GetOneProducto(productoId);
      res.send({ status: "OK", data: productoAux })
}

var CreateOneProducto = function(req, res){
    var body = req.body;
    console.log("req: "+req.body);

    console.log("body: "+body);
    console.log("id: "+body.id);
    console.log("name: "+body.product_name);
    console.log("price: "+body.price);
    
    if(!body.id || !body.product_name || !body.price){
        console.warn("Los datos que pasaste para crear el objeto estan mal, falta algun dato");
        return;
    }

    var productoAux = {
        id: body.id,
        product_name: body.product_name,
        price: body.price
    };

    var createdProducto = producto.CreateNewProducto(productoAux);
    res.status(201).send({status: "ok", data: createdProducto});
}

var UpdateOneProducto = function(req, res){
    var {body, params: { productoId }} = req;
    //var body = req.body;
    //var productoId = req.params.productoId;
    //console.log(body);
    //console.log(productoId);
      if (!productoId) {
        return;
      }
      var updatedProducto = producto.UpdateOneProducto(productoId, body);
      res.send({ status: "OK", data: updatedProducto });
}

var DeleteOneProducto = function(req, res){
    console.log("nASHE");
    var {params: { productoId}} = req;
      if (!productoId) {
        console.warn("Id no encontrada PERRO");
        return;
      }
      producto.DeleteOneProducto(productoId);
      res.status(204).send({ status: "OK" });
}

module.exports = {
    GetAllProductos,
    GetOneProducto,
    CreateOneProducto,
    UpdateOneProducto,
    DeleteOneProducto
}