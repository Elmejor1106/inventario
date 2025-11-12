import { Router } from "express";   
import { methodHTTP as categoriaController} from "../controllers/categoria.controllers.js";
/*Creamos el enrutador */
const router = Router();

router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.postCategorias);
router.get("/:id", categoriaController.getCategory);
router.delete("/:id", categoriaController.Deletecategory);
router.put("/:id", categoriaController.updateCategorias);
/*hacemos exportable el enrutador  en toda la app*/
export default router;
