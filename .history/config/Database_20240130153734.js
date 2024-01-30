import {Sequelize} from "sequelize";

const db = new Sequelize('spp_', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db