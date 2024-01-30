import Kelas from "../models/KelasModel.js";

export const getKelas = async(req, res) => {
    try {
        const response = await Kelas.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getKelasById = async(req, res) => {
    try {
        const response = await Kelas.findOne({
            where:{
                nisn:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createKelas = async (req, res) => {
    try {
        await Kelas.create(req.body);
        res.status(201).json({ msg: "Kelas Created" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const updateKelas = async (req, res) => {
    try {
        await Kelas.update(req.body, {
            where:{
                nisn: req.params.id
            }
        });
        res.status(200).json({ msg: "Kelas Updated" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const deleteKelas = async (req, res) => {
    try {
        await Kelas.destroy({
            where:{
                nisn: req.params.id
            }
        });
        res.status(200).json({ msg: "Kelas Deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
