import { model, Schema, Model, Document } from 'mongoose';

export interface User extends Document {
    name: string;
    email: string;
    password: string;
    avatar?: string;
    active: string;
    created: Date;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: String,
    active: { type: Boolean, default: true }, 
    created: { type: Date, default: Date.now }
});

export const User: Model<User> = model('users', UserSchema);