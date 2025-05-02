import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const SortFilterBar = ({ types, selectedTypes, onType, sortOpt, onSort }) => (
    <Form className="mb-4">
        <Row className="align-items-center g-2">
            <Col xs={12} md={4}>
                <Form.Select value={sortOpt} onChange={e => onSort(e.target.value)}>
                    <option value="id">Sort by ID</option>
                    <option value="name">Sort by Name</option>
                </Form.Select>
            </Col>
            <Col xs={12} md={8}>
                <div className="d-flex flex-wrap gap-2">
                    {types.map(t => (
                        <Form.Check
                            key={t}
                            type="checkbox"
                            label={t}
                            checked={selectedTypes.includes(t)}
                            onChange={() => onType(t)}
                        />
                    ))}
                </div>
            </Col>
        </Row>
    </Form>
);

export default SortFilterBar;
