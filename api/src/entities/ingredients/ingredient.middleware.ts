import express from 'express'

class IngredientsMiddleware {
    async validateUuid(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body.uuid) {
            next();
        } 
        else {
            res.status(400).send('Please supply a uuid with your request')
        }
    }
}

export default new IngredientsMiddleware();