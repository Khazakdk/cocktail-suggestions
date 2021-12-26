import IngredientsDao from './dataObjects/ingredients.dao';
import { CRUD } from '../common/crud.interface';
import { CreateIngredientDto } from './dataObjects/create.ingredient.dto';
import { PutIngredientDto } from './dataObjects/put.ingredient.dto';

class IngredientService implements CRUD {
    async deleteByUuid(uuid: string): Promise<any> {
        return IngredientsDao.deleteIngredientByUuid(uuid)
    }

    async add(resource: CreateIngredientDto): Promise<any> {
        return IngredientsDao.addIngredient(resource);
    }

    async putByUuid(uuid: string, resource: PutIngredientDto): Promise<any> {
        return IngredientsDao.putIngredientByUuid(uuid, resource);
    }

    async readByUuid(uuid: string): Promise<any> {
        return IngredientsDao.getIngredientByUuid(uuid);
    }

    async read (limit: number, page: number): Promise<any> {
        return IngredientsDao.getIngredients();
    };
}

export default new IngredientService();