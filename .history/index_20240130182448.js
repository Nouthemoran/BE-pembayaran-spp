import express from "express";
import cors from "cors";
import SppRoute from "./routes/SppRoute.js";
import SiswaRoute from "./routes/SiswaRoute.js";
import KelasRoute from "./routes/KelasRoute.js";
import PetugasRoute from "./routes/PetugasRoute.js";
import PembayaranRoute from ".";

const app = express();
app.use(cors());
app.use(express.json());
app.use(SppRoute);
app.use(SiswaRoute);
app.use(KelasRoute);
app.use(PetugasRoute);

app.listen(5000, ()=> console.log('Server jalan..'));