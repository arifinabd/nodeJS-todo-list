require('dotenv').config()

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT,
  DB_DIALECT,
  DB_LOGGING
} = process.env;

const sequalizeConfig = {
  dialect: DB_DIALECT,
  host: DB_HOST,
  port: parseInt(DB_PORT, 0),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  logging: DB_LOGGING,
  seederStorage: 'sequalize',
  seederStorageTableName: 'SequalizeData'
}

module.exports = sequalizeConfig;