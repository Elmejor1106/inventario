import { Router } from "express";   
import { methodHTTP as categoriaController} from "../controllers/categoria.controllers.js";
/*Creamos el enrutador */
const router = Router();

router.get("/", categoriaController.getCategorias);
/*hacemos exportable el enrutador  en toda la app*/
export default router;
