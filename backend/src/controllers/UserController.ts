import { Request, Response } from 'express'

import User from '../schemas/User'
import bcrypt from 'bcryptjs/dist/bcrypt'
import jwt from 'jsonwebtoken'
import authConfig from '../config/auth.json'

class UserController {
    public async index(req: Request, res: Response): Promise<Response> {
        const users = await User.find().select('+password')

        return res.json(users)
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const { cpf } = req.body;

        try {
            if (await User.findOne({ cpf }))
                return res.status(400).send({ error: 'User already exists' })

            const user = await User.create(req.body)

            const token = jwt.sign({ id: user.id }, authConfig.secret, {
                expiresIn: 86400
            })

            user.password = undefined
            return res.send({user, token})
        } catch (error) {
            return res.status(400).send({ error: 'Registration failed' });
        }

    }

    public async authenticate(req: Request, res: Response): Promise<Response> {
        const { cpf, password } = req.body

        const user = await User.findOne({ cpf }).select('+password');
        if (!user) return res.status(400).send({ error: 'CPF not registered.' });

        if (!await bcrypt.compare(password, user.password)) return res.status(400).send({ error: 'Invalid password.' })
        user.password = undefined

        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 86400
        })

        return res.send({ user, token })
    }
}

export default new UserController()