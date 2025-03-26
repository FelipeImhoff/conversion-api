import { Request, Response } from "express";
import conversionService from "../services/conversionService";

export const getConversionRate = async (req: Request, res: Response): Promise<void> => {
    try {
        const { origin } = req.query;

        if (!origin || typeof origin !== "string") {
            res.status(400).json({ error: "Parâmetro 'origin' é obrigatório e deve ser uma string" });
            return;
        }

        const result = await conversionService.calculateConversionRate(origin);

        if (!result) {
            res.status(404).json({ error: "Nenhum dado encontrado para essa origem" });
            return;
        }

        res.json(result);

    } catch (error) {
        console.error("Erro ao obter taxa de conversão:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
};
