//ESTO SOLO ES PARA LEER EL JSON EN LA MONGO NO HARIA FALTA YA
var fs = require('fs');
var SaveToDataBase = function(db){
    fs.writeFileSync("./src/database/db.json", JSON.stringify(db, null, 2), {encoding: "utf8"});
};

module.exports = {SaveToDataBase};

