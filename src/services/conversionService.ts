import prisma from "../config/database";

interface ConversionRate {
    status: number;
    count: number;
    percentage: string;
}

interface ConversionResult {
    origin: string;
    total: number;
    conversionRates: ConversionRate[];
}

const calculateConversionRate = async (origin: string): Promise<ConversionResult | null> => {
    const total = await prisma.usersSurveysResponsesAux.count({ where: { origin } });

    if (total === 0) return null;

    const grouped = await prisma.usersSurveysResponsesAux.groupBy({
        by: ["responseStatusId"],
        where: { origin },
        _count: { _all: true }
    });

    const conversionRates: ConversionRate[] = grouped.map(group => ({
        status: group.responseStatusId,
        count: group._count._all,
        percentage: `${Math.round((group._count._all / total) * 100)}%`
    }));

    return { origin, total, conversionRates };
};

export default { calculateConversionRate };
