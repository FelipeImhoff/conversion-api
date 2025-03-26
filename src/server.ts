import express from "express";
import cors from 'cors'
import conversionRoutes from "./routes/conversionRoutes";

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());
app.use("/api", conversionRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
