import { Schema, model, Document} from 'mongoose'

interface MissingPersonInterface extends Document {
    recognizedBy: string,
    firstName: string,
    lastName: string,
    responsibleCpf: string,
    photo: Buffer,
    gender: number,
    approximatelyAge: number,
    birthDate: Date,
    missingDate: Date
}

const MissingPersonSchema = new Schema ({
    recognizedBy: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    responsibleCPF: {
        type: String,
        required: true
    },
    photo: {
        type: Buffer,
        required: true
    },
    gender: {
        type: Number,
        required: true
    },
    approximatelyAge: {
        type: Number,
        required: true
    },
    birthDate: {
        type: Date,
        required: false
    },
    missingDate: {
        type: Date,
        required: false
    }
})

export default model<MissingPersonInterface>('MissingPerson', MissingPersonSchema)