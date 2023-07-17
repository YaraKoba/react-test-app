import { useMemo } from "react";
import { getPageCount } from "../utils/pages"

export const usePagination = (limit, totalCurent) => {
    const pageArray = useMemo(() => {
        const countPages = getPageCount(totalCurent, limit);
        let pageArr = [];
        for (let i = 0; i < countPages; i++) {
            pageArr.push(i+1)
        };
        return pageArr;
    }, [limit, totalCurent]);

    return pageArray;
};