import express from "express";
import cors from "cors";
import SRoute from "./routes/SppRoute.js";
import UserRoute from "./routes/SiswaRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, ()=> console.log('Server jalan..'));