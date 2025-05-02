import React, { useState } from 'react';
import { fetchPokemonDetails } from '../utils/api';
import { Button, Form, Row, Col, Card } from 'react-bootstrap';

export default function CompareTool() {
    const [a, setA] = useState(''), [b, setB] = useState('');
    const [d1, setD1] = useState(), [d2, setD2] = useState();

    const compare = async () => {
        const [r1, r2] = await Promise.all([fetchPokemonDetails(a), fetchPokemonDetails(b)]);
        setD1(r1); setD2(r2);
    };

    return (
        <Card className="p-3 my-4">
            <Row className="g-2 align-items-end">
                <Col md={5}><Form.Label>First</Form.Label><Form.Control value={a} onChange={e => setA(e.target.value)} /></Col>
                <Col md={5}><Form.Label>Second</Form.Label><Form.Control value={b} onChange={e => setB(e.target.value)} /></Col>
                <Col md={2}><Button className='w-100' onClick={compare}>Compare</Button></Col>
            </Row>
            {d1 && d2 && (
                <Row className="mt-3">
                    {[d1, d2].map((d, i) => (
                        <Col key={i}>
                            <h5>{d.name}</h5>
                            {d.stats.map(s => <p key={s.stat.name}>{s.stat.name}: {s.base_stat}</p>)}
                        </Col>
                    ))}
                </Row>
            )}
        </Card>
    );
};
