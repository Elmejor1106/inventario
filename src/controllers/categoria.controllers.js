import getConnection from "./../db/database.js";
const getCategorias = async (req, res) => {

    try {
    const connection = await getConnection();
    const result = await connection.query("select categoriaID, CategoriaNombre, Descripcion, Imagen from categorias");
    res.json(result);}
    catch (error) {
       console.error("Error 500");
    }

};

export const methodHTTP = {
  getCategorias 
};