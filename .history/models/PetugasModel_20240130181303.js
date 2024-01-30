import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Kelas = db.define('Kelas', {
    id_petugas: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: DataTypes.STRING(25),
      password: DataTypes.STRING(32),
      nama_petugas: DataTypes.STRING(35),
      level: DataTypes.ENUM('admin', 'petugas')
    
    
},{
    freezeTableName:true
});

export default Kelas;

(async () => {
    await db.sync();
})();