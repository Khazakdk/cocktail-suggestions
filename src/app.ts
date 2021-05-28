import express from 'express';
import { CommonRoutesConfig } from './entities/common/common.routes'
import { IngredientRoutes } from './entities/ingredients/ingredient.routes'
const app = express();
const port = 8080; // default port to listen
const routes: Array<CommonRoutesConfig> = [];

app.use(express.json());
routes.push(new IngredientRoutes(app));

// define a route handler for the default home page
app.get( '/', ( req, res ) => {
    res.send( 'Hello world!' );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
    routes.forEach(element => {
        console.log(element)
    });
} );