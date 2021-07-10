import dotenv from 'dotenv'
dotenv.config()
module.exports = {
    type: 'postgres',
    host: 'batyr.db.elephantsql.com',
    port: 5432,
    username: 'etocnxwe',
    database: 'etocnxwe',
    password: process.env.DB_PASS,
    entities: ["src/entity/**/*.ts"],
    logging: true,
    synchronize: true 
}