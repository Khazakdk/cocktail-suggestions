import { CommonRoutesConfig } from './common';
import express from 'express';

export class IngredientRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'IngredientsRoutes');
  }

  configureRoutes() {
    this.app.route('/ingredients')
      .get( (req: express.Request, res: express.Response) => {
        res.status(200).send("ingredients")
      })
      .post( (req: express.Request, res: express.Response) => {
        res.status(200).send("post ingredients")
      });

    this.app.route('/ingredients/:id')
      .all( (req: express.Request, res: express.Response, next: express.NextFunction) => {
        next();
      })
      
      .get( (req: express.Request, res: express.Response) => {
        res.status(200).send("get ingredient")
      })
      .post( (req: express.Request, res: express.Response) => {
        res.status(200).send("post ingredient")
      })
      .delete( (req: express.Request, res: express.Response) => {
        res.status(200).send("delete ingredient")
      });
    
    return this.app;      
  }
}