import {Sequelize} from "sequelize";

const db = new Sequelize('db_spp_js', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db