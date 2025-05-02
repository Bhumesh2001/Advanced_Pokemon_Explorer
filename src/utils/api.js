const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

/**
 * Helper to fetch and parse JSON with error handling
 */
const fetchJSON = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
        }
        return await res.json();
    } catch (err) {
        console.error(`Error fetching ${url}:`, err);
        throw err;
    }
};

/**
 * Fetch a paginated list of Pokémon
 */
export const fetchPokemonList = async (limit = 20, offset = 0) => {
    const url = `${BASE_URL}?limit=${limit}&offset=${offset}`;
    return await fetchJSON(url);
};

/**
 * Fetch detailed data for a specific Pokémon by ID or full URL
 */
export const fetchPokemonDetails = async (urlOrId) => {
    let url;

    if (typeof urlOrId === 'string') {
        url = urlOrId.startsWith('http') ? urlOrId : `${BASE_URL}/${urlOrId}`;
    } else if (typeof urlOrId === 'number') {
        url = `${BASE_URL}/${urlOrId}`;
    } else {
        throw new Error('Invalid argument: urlOrId must be a string or number');
    }

    return await fetchJSON(url);
};
