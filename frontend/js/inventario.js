import { obtainCategories, deleteCategory, updateCategory, getCategory } from './../apiConnection/consumeApi.js';

document.addEventListener('DOMContentLoaded', () => {
    getCategories();
});



    async function getCategories(){

        const categoriesObtained = await obtainCategories();
        const container = document.querySelector('tbody');
        container.innerHTML = ''; // Limpiar tabla antes de cargar
        categoriesObtained.forEach(category => {
            const { categoriaID, CategoriaNombre, Descripcion, Imagen } = category;
            const row = document.createElement('tr');
            row.innerHTML = `
            
            <td>
            ${categoriaID}
            </td>
            <td>
            ${CategoriaNombre}
            </td>
            <td>
            ${Descripcion}
            </td>
            <td>
            <img src="${Imagen}" alt="${CategoriaNombre}" width="100" class="cuenta">
            </td>
            <td>
            <button class="btn color3" onclick="viewDetails(${categoriaID})">Details</button>
            </td>
            <td>
            <button class="btn color2" onclick="editCategory(${categoriaID})">Edit</button>
            </td>
            <td>
            <button class="btn color5" onclick="removeCategory(${categoriaID})">Delete</button>
            </td>
            `;
            container.appendChild(row);
        });

    }

    // Función para eliminar categoría
    window.removeCategory = async (id) => {
        if (confirm('¿Estás seguro de que deseas eliminar esta categoría?')) {
            try {
                await deleteCategory(id);
                alert('Categoría eliminada exitosamente');
                getCategories(); // Recargar la tabla
            } catch (error) {
                alert('Error al eliminar la categoría');
                console.error(error);
            }
        }
    }

    // Función para editar categoría
    window.editCategory = async (id) => {
        try {
            const category = await getCategory(id);
            const newName = prompt('Nombre de la categoría:', category.CategoriaNombre);
            const newDesc = prompt('Descripción:', category.Descripcion);
            const newImg = prompt('URL de la imagen:', category.Imagen);
            
            if (newName && newDesc && newImg) {
                const updatedData = {
                    CategoriaNombre: newName,
                    Descripcion: newDesc,
                    Imagen: newImg
                };
                await updateCategory(id, updatedData);
                alert('Categoría actualizada exitosamente');
                getCategories(); // Recargar la tabla
            }
        } catch (error) {
            alert('Error al editar la categoría');
            console.error(error);
        }
    }

    // Función para ver detalles
    window.viewDetails = async (id) => {
        try {
            const category = await getCategory(id);
            alert(`
ID: ${category.categoriaID}
Nombre: ${category.CategoriaNombre}
Descripción: ${category.Descripcion}
Imagen: ${category.Imagen}
            `);
        } catch (error) {
            alert('Error al obtener detalles');
            console.error(error);
        }
    }