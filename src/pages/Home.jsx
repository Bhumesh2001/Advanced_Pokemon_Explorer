import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { usePokemon } from '../hooks/usePokemon';
import PokemonCard from '../components/PokemonCard';
import Pagination from '../components/Pagination';
import SortFilterBar from '../components/SortFilterBar';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
    const [page, setPage] = useState(1);
    const [sortOpt, setSort] = useState('id');
    const [selTypes, setTypes] = useState([]);

    const perPage = 20;
    const { list, total, loading } = usePokemon(perPage, (page - 1) * perPage);

    if (loading) return <LoadingSpinner />;

    // derive available types
    const types = [...new Set(list.flatMap(p => p.types.map(t => t.type.name)))];

    // filter & sort
    const filtered = list.filter(p => !selTypes.length || p.types.some(t => selTypes.includes(t.type.name)));
    const sorted = filtered.sort((a, b) => sortOpt === 'name' ? a.name.localeCompare(b.name) : a.id - b.id);

    return (
        <>
            <SortFilterBar
                types={types}
                selectedTypes={selTypes}
                onType={t => setTypes(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])}
                sortOpt={sortOpt}
                onSort={setSort}
            />

            <Row>
                {sorted.map(p =>
                    <Col key={p.id} md={4} sm={6} xs={12}>
                        <PokemonCard pokemon={p} />
                    </Col>
                )}
            </Row>

            <Pagination
                page={page}
                totalPages={Math.ceil(total / perPage)}
                onChange={setPage}
            />
        </>
    );
};

export default Home;
