import { Schema, model, Document} from 'mongoose'
import bcrypt from 'bcryptjs'

interface UserInterface extends Document{
    firstName: string,
    lastName: string,
    cpf: string,
    password: string,
}

const UserSchema = new Schema({
    firstName:  {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
}, {
    timestamps: true
})

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

export default model<UserInterface>('User', UserSchema)