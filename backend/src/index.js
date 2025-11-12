

/* fuction expression */
import app from './app.js';
const main = () => {
  
    app.listen(app.get("port"));
    console.log(`Servidor en el puerto de algo, ${app.get("port")}`);
};


main();

