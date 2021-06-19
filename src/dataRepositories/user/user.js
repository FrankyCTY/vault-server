import mongoose from 'mongoose'
import { getSchemaBaseOptions } from '../schemaOptions'

const { Schema, model } = mongoose

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    username: String,
    password: String,
  },
  getSchemaBaseOptions()
)

export const User = model('User', UserSchema)
