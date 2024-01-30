import Petugas from "../models/PetugasModel.js";

export const getPetugas = async(req, res) => {
    try {
        const response = await Petugas.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPetugasById = async(req, res) => {
    try {
        const response = await Petugas.findOne({
            where:{
                id_Petugas:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPetugas = async (req, res) => {
    try {
        await Petugas.create(req.body);
        res.status(201).json({ msg: "Petugas Created" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const updatePetugas = async (req, res) => {
    try {
        await Petugas.update(req.body, {
            where:{
                id_Petugas: req.params.id
            }
        });
        res.status(200).json({ msg: "Petugas Updated" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const deletePetugas = async (req, res) => {
    try {
        await Petugas.destroy({
            where:{
                id_Petugas: req.params.id
            }
        });
        res.status(200).json({ msg: "Petugas Deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
