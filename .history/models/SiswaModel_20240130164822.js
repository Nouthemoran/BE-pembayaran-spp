import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const id_Siswa = db.define('id_Siswa', {
    id_siswa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tahun: DataTypes.INTEGER,
      nominal: DataTypes.INTEGER    
},{
    freezeTableName:true
});

export default id_Siswa;

(async () => {
    await db.sync();
})();