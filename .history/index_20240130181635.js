import express from "express";
import cors from "cors";
import SppRoute from "./routes/SppRoute.js";
import SiswaRoute from "./routes/SiswaRoute.js";
import KelasRoute from "./routes/KelasRoute.js";
import KelasRoute from "./routes/KelasRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(SppRoute);
app.use(SiswaRoute);
app.use(KelasRoute);

app.listen(5000, ()=> console.log('Server jalan..'));