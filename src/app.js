/* importamos al framework express */
import cors from 'cors';
import express from 'express';
import categoriasRoutes from './routes/categorias.routes.js';
/* Asignamos a app toda funcionalidad de mi servidor*/
const app = express();

/*setear puerto */
app.set("port", 5000);
/*Middlewares*/
app.use(express.json());

app.use(cors())

/*routes*/
app.use("/api/categorias",categoriasRoutes);


/*hacemos disponible mi app  a toda la aplicacion*/
export default app;