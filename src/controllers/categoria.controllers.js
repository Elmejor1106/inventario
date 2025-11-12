import getConnection from "./../db/database.js";
const getCategorias = async (req, res) => {

    try {
    const connection = await getConnection();
    const result = await connection.query("select categoriaID, CategoriaNombre, Descripcion, Imagen from categorias");
    res.json(result);}
    catch (error) {
       console.error("Error 500", error);
       res.status(500).json({message: "Error al obtener categorías", error: error.message});
    }

};

const postCategorias = async (req, res) => {
    try {
       const { CategoriaNombre, Descripcion, Imagen } = req.body;

       const category ={
        CategoriaNombre, Descripcion, Imagen};
        const connection = await getConnection();

        const result = await connection.query("insert into categorias set ?", category);

        
        res.json(result);
    }
    catch (error) {
       console.error("Error 500", error);
       res.status(500).json({message: "Error al crear categoría", error: error.message});
    }
}

const getCategory = async (req, res) => {

    try {
        console.log(req.params);
        const { id } = req.params;


    const connection = await getConnection();
    const result = await connection.query("select categoriaID, CategoriaNombre, Descripcion, Imagen from categorias where categoriaID = ?", id);
    res.json(result);}
    catch (error) {
       console.error("Error 500", error);
       res.status(500).json({message: "Error al obtener categoría", error: error.message});
    }

    

};

const Deletecategory = async (req, res) => {

    try {
        console.log(req.params);
        const { id } = req.params;


    const connection = await getConnection();
    const result = await connection.query("Delete from categorias where categoriaID = ?", id);
    res.json(result);}
    catch (error) {
       console.error("Error 500", error);
       res.status(500).json({message: "Error al eliminar categoría", error: error.message});
    }

    

};


const updateCategorias = async (req, res) => {
    try {
       const {id} = req.params;
       const {CategoriaNombre, Descripcion, Imagen} = req.body;

       const category = {
        CategoriaNombre, Descripcion, Imagen
       };
        const connection = await getConnection();

        const result = await connection.query("update categorias set ? where categoriaID = ?", [category, id]);

        
        res.json(result);
    }
    catch (error) {
       console.error("Error 500", error);
       res.status(500).json({message: "Error al actualizar categoría", error: error.message});
    }
}


export const methodHTTP = {
  getCategorias,
  postCategorias,
  getCategory,
  Deletecategory,
  updateCategorias
};