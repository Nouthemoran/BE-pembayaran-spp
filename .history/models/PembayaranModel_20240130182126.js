import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Pembayaran = db.define('Pembayaran', {
    id_Pembayaran: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: DataTypes.STRING(25),
      password: DataTypes.STRING(32),
      nama_Pembayaran: DataTypes.STRING(35),
      level: DataTypes.ENUM('admin', 'Pembayaran')    
    
},{
    freezeTableName:true
});

export default Pembayaran;

(async () => {
    await db.sync();
})();