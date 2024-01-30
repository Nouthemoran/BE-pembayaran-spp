import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Siswa = db.define('Siswa', {
    id_Siswa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tahun: DataTypes.INTEGER,
      nominal: DataTypes.INTEGER    
},{
    freezeTableName:true
});

export default Siswa;

(async () => {
    await db.sync();
})();