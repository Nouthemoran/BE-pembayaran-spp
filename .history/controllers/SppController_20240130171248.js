import Spp from "../models/SppModel.js";

export const getSpp = async(req, res) => {
    try {
        const response = await Spp.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getSppByid_spp = async(req, res) => {
    try {
        const response = await Spp.findOne({
            where:{
                id_spp:req.params.id_spp_spp
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createSpp = async (req, res) => {
    try {
        await Spp.create(req.body);
        res.status(201).json({ msg: "Spp Created" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const updateSpp = async (req, res) => {
    try {
        await Spp.update(req.body, {
            where:{
                id_spp: req.params.id_spp
            }
        });
        res.status(200).json({ msg: "Spp Updated" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const deleteSpp = async (req, res) => {
    try {
        await Spp.destroy({
            where:{
                id_spp: req.params.id_spp
            }
        });
        res.status(200).json({ msg: "Spp Deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
