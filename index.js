import express from "express";
import defaultRoutes from "./routes/rotas.js"

const app = express();

app.use(express.json());
app.use("/", defaultRoutes)

app.listen(3000);
