const url = "http://localhost:5000/api/categorias";


export const obtainCategories = async () => {
   try {
    const resultado = await fetch(url);
    const categorias =await resultado.json();
    return categorias;



   } catch (error) {   
    console.error("error")   
   }

}

export const deleteCategory = async (id) => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error al eliminar categoría:", error);
    }
}

export const updateCategory = async (id, data) => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error al actualizar categoría:", error);
    }
}

export const getCategory = async (id) => {
    try {
        const response = await fetch(`${url}/${id}`);
        const category = await response.json();
        return category[0];
    } catch (error) {
        console.error("Error al obtener categoría:", error);
    }
}