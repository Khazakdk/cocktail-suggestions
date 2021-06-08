import { CommonRoutesConfig } from '../common/common.routes';
import CommonMiddleware from '../common/common.middleware';
import IngredientsController from './ingredients.controller';
import IngredientsMiddleware from './ingredient.middleware';
import express from 'express';

export class IngredientRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'IngredientsRoutes');
  }

  configureRoutes() {
    this.app.route('/ingredients')
      .get(IngredientsController.listIngredients)
      .post(IngredientsController.createIngredient);

    this.app.param("uuid", CommonMiddleware.extractUuidFromUrl);  
    this.app.route('/ingredients/:uuid')
      .all(IngredientsMiddleware.validateUuid)      
      .get(IngredientsController.getIngredientByUuid)
      .put(IngredientsController.updateIngredientByUuid)
      .delete(IngredientsController.deleteIngredientByUuid);
    
    return this.app;      
  }
}