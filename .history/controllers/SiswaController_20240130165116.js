import <Siswa></Siswa> from "../models/<Siswa></Siswa>Model.js";

export const get<Siswa></Siswa> = async(req, res) => {
    try {
        const response = await <Siswa></Siswa>.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const get<Siswa></Siswa>ById = async(req, res) => {
    try {
        const response = await <Siswa></Siswa>.findOne({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const create<Siswa></Siswa> = async (req, res) => {
    try {
        await <Siswa></Siswa>.create(req.body);
        res.status(201).json({ msg: "<Siswa></Siswa> Created" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const update<Siswa></Siswa> = async (req, res) => {
    try {
        await <Siswa></Siswa>.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "<Siswa></Siswa> Updated" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const delete<Siswa></Siswa> = async (req, res) => {
    try {
        await <Siswa></Siswa>.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "<Siswa></Siswa> Deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
