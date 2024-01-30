import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Pembayaran = db.define('Pembayaran', {
    id_pembayaran: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_petugas: DataTypes.INTEGER,
      nisn: DataTypes.STRING(10),
      tgl_bayar: DataTypes.DATE,
      bulan_dibayar: DataTypes.STRING(8),
      tahun_dibayar: DataTypes.STRING(4),
      id_spp: DataTypes.INTEGER,
      jumlah_bayar: DataTypes.INTEGER    
    
},{
    freezeTableName:true
});

export default Pembayaran;

(async () => {
    await db.sync();
})();