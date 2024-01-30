import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const S = db.define('S', {
    id_S: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tahun: DataTypes.INTEGER,
      nominal: DataTypes.INTEGER    
},{
    freezeTableName:true
});

export default S;

(async () => {
    await db.sync();
})();