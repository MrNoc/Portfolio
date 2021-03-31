import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div>
                <a className="transition" href="http://localhost:3000/">William Q. Aquino 2021 ©</a>
            </div>

            <h2>O que achou do meu portfolio? Avalie abaixo:</h2>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
        </footer>
    );
}

export default Footer;