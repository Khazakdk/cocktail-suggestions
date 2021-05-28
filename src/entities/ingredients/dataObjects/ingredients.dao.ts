import { v4 as uuidv4 } from 'uuid';

import { CreateIngredientDto } from './create.ingredient.dto';
import { PutIngredientDto } from './put.ingredient.dto';

class IngredientsDao {
    ingredients: Array<CreateIngredientDto> = [];

    async addIngredient(ingredient: CreateIngredientDto): Promise<string> {
        ingredient.uuid = uuidv4();
        this.ingredients.push(ingredient);
        return ingredient.uuid;
    }

    async getIngredients(): Promise<CreateIngredientDto[]> {
        return this.ingredients;
    }
    async getIngredientByUuid(uuid: string): Promise<CreateIngredientDto | undefined> {
        return this.ingredients.find(user => user.uuid === uuid)
    }

    async getIngredientByName(name: string) {
        const objIndex = this.ingredients.findIndex(ingredient => ingredient.name = name);
        if (this.ingredients[objIndex]) {
            return this.ingredients[objIndex];
        }

        return {};
    }

    async putIngredientByUuid(uuid: string, ingredient: PutIngredientDto) {
        const objIndex = this.ingredients.findIndex(ingredient => ingredient.uuid = uuid)
        this.ingredients.splice(objIndex, 1, ingredient);
        return this.ingredients[objIndex];
    }

    async deleteIngredientByUuid(uuid: string) {
        const objIndex = this.ingredients.findIndex(ingredient => ingredient.uuid = uuid);
        this.ingredients.splice(objIndex, 1);
        return `Deleted ${uuid}`;
    }
}

export default new IngredientsDao();