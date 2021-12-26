import express from 'express';

import IngredientService from './ingredients.service';

class IngredientsController {
    async listIngredients(req: express.Request, res: express.Response) {
        const ingredients = await IngredientService.read(100, 0);
        res.json(ingredients);
    }

    async getIngredientByUuid(req: express.Request, res: express.Response) {
        const ingredient = await IngredientService.readByUuid(req.body.uuid);
        res.json(ingredient);
    }

    async createIngredient(req: express.Request, res: express.Response) {
        res.json(await IngredientService.add(req.body));
    }

    async updateIngredientByUuid(req: express.Request, res: express.Response) {
        res.json(await IngredientService.putByUuid(req.body.uuid, req.body));
    }

    async deleteIngredientByUuid(req: express.Request, res: express.Response) {
        res.json(await IngredientService.deleteByUuid(req.body.uuid));
    }
}

export default new IngredientsController();