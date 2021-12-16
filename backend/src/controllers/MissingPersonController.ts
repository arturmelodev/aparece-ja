import MissingPerson from "../schemas/MissingPerson";
import {Request, Response} from 'express'

class MissingPersonController {

    public async index (req: Request, res: Response): Promise<Response> {
        const missingPeople = await MissingPerson.find()

        return res.json(missingPeople)
    }

    public async store (req: Request, res: Response): Promise<Response> {
        const missingPerson = await MissingPerson.create(req.body)

        return res.json(missingPerson)
    }
}

export default new MissingPersonController()