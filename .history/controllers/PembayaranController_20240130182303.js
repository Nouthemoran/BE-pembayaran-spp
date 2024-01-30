import Pembayaran from "../models/PembayaranModel.js";

export const getPembayaran = async(req, res) => {
    try {
        const response = await Pembayaran.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPembayaranById = async(req, res) => {
    try {
        const response = await Pembayaran.findOne({
            where:{
                id_pembayaran:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPembayaran = async (req, res) => {
    try {
        await Pembayaran.create(req.body);
        res.status(201).json({ msg: "Pembayaran Created" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const updatePembayaran = async (req, res) => {
    try {
        await Pembayaran.update(req.body, {
            where:{
                ip_Pembayaran: req.params.id
            }
        });
        res.status(200).json({ msg: "Pembayaran Updated" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const deletePembayaran = async (req, res) => {
    try {
        await Pembayaran.destroy({
            where:{
                id_Pembayaran: req.params.id
            }
        });
        res.status(200).json({ msg: "Pembayaran Deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
