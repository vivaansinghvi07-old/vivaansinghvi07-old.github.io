import { useState } from 'react';
import { useBetween } from 'use-between';

const useSortOrder = () => {
    const [sortOrder, setSortOrder] = useState("");
    return {sortOrder, setSortOrder};
}

export const useSharedSortOrder = () => useBetween(useSortOrder);