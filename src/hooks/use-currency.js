import { useMemo } from "react";

export const useCurrency = (amount) => {
    const formatted = useMemo(() => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    }, [amount])

    return formatted
};