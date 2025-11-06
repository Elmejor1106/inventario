/* importamos al framework express */

import express from 'express';
/* Asignamos a app toda funcionalidad de mi servidor*/
const app = express();

/*setear puerto */
app.set("port", 3000);

/*hacemos disponible mi app  a toda la aplicacion*/
export default app;