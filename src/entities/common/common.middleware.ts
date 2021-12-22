import express from 'express'

class CommonMiddleware {
    async extractUuidFromUrl(req: express.Request, res: express.Response, next: express.NextFunction) {
        console.log("````````````````````")
        console.log(req.params);
        req.body.uuid = req.params.uuid;
        next();
    }
}

export default new CommonMiddleware();