import {Sequelize} from "sequelize";

const db = new Sequelize('spp_crud', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db