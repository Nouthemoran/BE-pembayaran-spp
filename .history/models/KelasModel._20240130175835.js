import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Kelas = db.define('Kelas', {
    id_kelas: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nama_kelas: DataTypes.STRING(10),
      kompetensi_keahlian: DataTypes.STRING(50)
    
},{
    freezeTableName:true
});

export default Kelas;

(async () => {
    await db.sync();
})();