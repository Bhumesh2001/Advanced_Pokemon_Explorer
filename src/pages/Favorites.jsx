import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useFavorites } from '../hooks/useFavorites';
import PokemonCard from '../components/PokemonCard';

const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <>
            <h2>Your Favorites</h2>
            {favorites.length === 0
                ? <p>No favorites yet.</p>
                : <Row>
                    {favorites.map(p => (
                        <Col key={p.id} md={4} sm={6} xs={12}>
                            <PokemonCard pokemon={p} />
                        </Col>
                    ))}
                </Row>
            }
        </>
    );
};

export default Favorites;
