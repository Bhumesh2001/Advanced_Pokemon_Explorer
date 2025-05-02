import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Pagination = ({ page, totalPages, onChange }) => (
    <div className="d-flex justify-content-center my-3">
        <ButtonGroup>
            <Button disabled={page <= 1} onClick={() => onChange(page - 1)}>Prev</Button>
            <Button variant="light" disabled>Page {page} of {totalPages}</Button>
            <Button disabled={page >= totalPages} onClick={() => onChange(page + 1)}>Next</Button>
        </ButtonGroup>
    </div>
);

export default Pagination;
