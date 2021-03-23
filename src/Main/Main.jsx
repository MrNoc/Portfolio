import React from 'react';
import me from './myImage.jpg';
import './Main.css';

const Main = () => {
    return (
        <main>
            <div id="designer">
                <h1>Designer</h1>
                <p>Designer de interface, com paixão por criar experiências <br></br> ded usuário bonitas e funcionais. <br></br>Minimalista que acredita que menos é mais.</p>
            </div>

            <div>
                <img src={me} id="myImage" alt="me" />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                >

                </a>
            </div>
            <div id="coder">
                <h1>&lt;Coder&gt;</h1>
                <p>Gamer apaixonado por tecnologia da informação,<br></br> principalmente pelas partes<br></br> de criação de apps e Pentest.</p>
            </div>
        </main>
    );
};

export default Main;