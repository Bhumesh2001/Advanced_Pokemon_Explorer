import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

export const useFavorites = () => {
    const ctx = useContext(PokemonContext);
    if (!ctx) throw new Error('useFavorites must be inside PokemonProvider');
    return ctx;
};
