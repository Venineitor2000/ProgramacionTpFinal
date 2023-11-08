var db = require("../database/db.json");
var {SaveToDataBase} = require("../database/utils.js");
var GetAllProductos = function(){
    return db.producto;
}

var CreateNewProducto = function(newProducto){
    
    var isAlreadyAdded = db.producto.findIndex(function(producto){return producto.product_name === newProducto.product_name})  > -1||
    db.producto.findIndex(function(producto){return producto.id.toString() === newProducto.id.toString()}) > -1;
    if(isAlreadyAdded)
    {
        console.warn("Id o nombre ya existente");
        return;
    }
        
    //Aca habria que cambiar ya con la parte del mongo
    db.producto.push(newProducto) //Actualize el json pero oslo en memoria
    SaveToDataBase(db); //Le hice el commit para que quede guardado posta
}

var UpdateOneProducto = function(productoId, changes) {
    var indexForUpdate = db.producto.findIndex(
      function(producto){ return producto.id.toString() === productoId.toString()}
    );
    if (indexForUpdate === -1) {
        console.warn("id no existe");
      return;
    }
    var updatedProducto = {
      ...db.producto[indexForUpdate],
      ...changes,
    };
    db.producto[indexForUpdate] = updatedProducto;
    SaveToDataBase(db);
    return updatedProducto;
  };

  var GetOneProducto = function (productoId){
    var producto = db.producto.find(function(producto) {return producto.id.toString() === productoId.toString()});
    
    if (!producto) {
        console.warn("No se encontro nada con ese id")
      return;
    }
    return producto;
  };

  var DeleteOneProducto = (productoId) => {
    var indexForDeletion = db.producto.findIndex(
      function(producto) {return producto.id.toString() === productoId.toString()}
    );
    if (indexForDeletion === -1) {
        console.warn("id no encontrada wachoooooooo");
      return;
    }
    db.producto.splice(indexForDeletion, 1);
    SaveToDataBase(db);
  };

module.exports = {GetAllProductos, CreateNewProducto, UpdateOneProducto, GetOneProducto, DeleteOneProducto};