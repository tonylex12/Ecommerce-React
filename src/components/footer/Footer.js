import React from 'react';
import './footer.scss';

const Footer = ({copy}) => {
    return (
        <footer className="fixed-bottom">
            <p>LEXTEC {copy}</p>
        </footer>
    )
}

export default Footer