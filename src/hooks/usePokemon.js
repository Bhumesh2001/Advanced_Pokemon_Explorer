import { useState, useEffect } from 'react';
import { fetchPokemonList, fetchPokemonDetails } from '../utils/api';

export const usePokemon = (limit, offset) => {
    const [data, setData] = useState({ list: [], total: 0, loading: true, error: null });
    useEffect(() => {
        (async () => {
            try {
                const { results, count } = await fetchPokemonList(limit, offset);
                const detailed = await Promise.all(results.map(p => fetchPokemonDetails(p.url)));
                setData({ list: detailed, total: count, loading: false, error: null });
            } catch (e) {
                setData(d => ({ ...d, loading: false, error: e.message }));
            }
        })();
    }, [limit, offset]);
    return data;
};
