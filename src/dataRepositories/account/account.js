import mongoose from 'mongoose'
import { getSchemaBaseOptions } from '../schemaOptions'

const { Schema, model } = mongoose

const AccountSchema = new Schema(
  {
    accountName: String,
    password: String,
  },
  getSchemaBaseOptions()
)

export const Account = model('Account', AccountSchema)
