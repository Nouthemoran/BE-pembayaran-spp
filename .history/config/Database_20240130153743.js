import {Sequelize} from "sequelize";

const db = new Sequelize('db_spp_', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db