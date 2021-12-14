import { Schema, model, Document} from 'mongoose'

interface UserInterface extends Document{
    email: string,
    firstName: string,
    lastName: string,
    cpf: string,
    password: string
}

const UserSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    cpf: String,
    password: String
}, {
    timestamps: true
})

export default model<UserInterface>('User', UserSchema)