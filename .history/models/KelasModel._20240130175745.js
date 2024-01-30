import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Siswa = db.define('Siswa', {
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

export default Siswa;

(async () => {
    await db.sync();
})();