import React, { createContext, useState } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });

    const toggleFavorite = (p) => {
        setFavorites(prev => {
            const exists = prev.find(x => x.id === p.id);
            const next = exists ? prev.filter(x => x.id !== p.id) : [...prev, p];
            localStorage.setItem('favorites', JSON.stringify(next));
            return next;
        });
    };

    return (
        <PokemonContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </PokemonContext.Provider>
    );
};
