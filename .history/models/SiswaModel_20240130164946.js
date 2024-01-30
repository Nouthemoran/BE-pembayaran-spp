import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Siswa = db.define('Siswa', {
    nisn: {
        type: DataTypes.STRING(10),
        primaryKey: true
      },
      nis: DataTypes.STRING(8),
      nama: DataTypes.STRING(35),
      id_kelas: DataTypes.INTEGER,
      alamat: DataTypes.TEXT,
      no_telp: DataTypes.STRING(13),
      id_spp: DataTypes.INTEGER
      
},{
    freezeTableName:true
});

export default Siswa;

(async () => {
    await db.sync();
})();