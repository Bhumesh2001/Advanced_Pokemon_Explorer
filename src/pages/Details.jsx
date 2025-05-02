import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchPokemonDetails } from '../utils/api';
import LoadingSpinner from '../components/LoadingSpinner';

const Details = () => {
    const { id } = useParams();
    const [p, setP] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchPokemonDetails(id);
                setP(data);
                setError(null);
            } catch (err) {
                console.error(err);
                setError('Pokémon not found or failed to load.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <LoadingSpinner />;
    if (error) return <Container><h4>{error}</h4></Container>;

    return (
        <Container>
            <h2>{p.name} (#{p.id})</h2>
            <Row>
                <Col md={4}><img src={p.sprites.front_default} alt={p.name} /></Col>
                <Col md={8}>
                    <h5>Stats</h5>
                    {p.stats.map(s => <p key={s.stat.name}>{s.stat.name}: {s.base_stat}</p>)}
                    <h5>Abilities</h5>
                    <ul>{p.abilities.map(a => <li key={a.ability.name}>{a.ability.name}</li>)}</ul>
                    <h5>Moves</h5>
                    <ul>{p.moves.slice(0, 10).map(m => <li key={m.move.name}>{m.move.name}</li>)}</ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Details;
