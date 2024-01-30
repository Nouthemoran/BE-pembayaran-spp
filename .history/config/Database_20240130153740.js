import {Sequelize} from "sequelize";

const db = new Sequelize('db_s', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db