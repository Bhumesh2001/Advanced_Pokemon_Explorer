import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';
import { capitalize } from '../utils/helpers';

const PokemonCard = ({ pokemon }) => {
    const { favorites, toggleFavorite } = useFavorites();
    const fav = favorites.some(x => x.id === pokemon.id);

    return (
        <Card className="mb-3 text-center">
            <Card.Img variant="top" src={pokemon.sprites.front_default} />
            <Card.Body>
                <Card.Title>{capitalize(pokemon.name)} (#{pokemon.id})</Card.Title>
                <Card.Text>{pokemon.types.map(t => capitalize(t.type.name)).join(', ')}</Card.Text>
                <Link to={`/pokemon/${pokemon.id}`} className="btn btn-primary btn-sm me-2">Details</Link>
                <Button
                    variant={fav ? 'warning' : 'outline-warning'}
                    size="sm"
                    onClick={() => toggleFavorite(pokemon)}
                >
                    {fav ? '★ Remove' : '☆ Favorite'}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default React.memo(PokemonCard);
