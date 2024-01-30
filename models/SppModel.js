import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Spp = db.define('Spp', {
    id_spp: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tahun: DataTypes.INTEGER,
      nominal: DataTypes.INTEGER    
},{
    freezeTableName:true
});

export default Spp;

(async () => {
    await db.sync();
})();