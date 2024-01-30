import Siswa from "../models/SiswaModel.js";

export const getSiswa = async(req, res) => {
    try {
        const response = await Siswa.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getSiswaById = async(req, res) => {
    try {
        const response = await Siswa.findOne({
            where:{
                ni:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createSiswa = async (req, res) => {
    try {
        await Siswa.create(req.body);
        res.status(201).json({ msg: "Siswa Created" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const updateSiswa = async (req, res) => {
    try {
        await Siswa.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Siswa Updated" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const deleteSiswa = async (req, res) => {
    try {
        await Siswa.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Siswa Deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
