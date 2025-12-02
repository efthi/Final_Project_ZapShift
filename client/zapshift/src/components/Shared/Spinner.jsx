import React from 'react';
import Container from './Container';

const Spinner = () => {
    return (
        <Container>
            <span className="loading loading-spinner text-info"></span>
        </Container>
    );
};

export default Spinner;