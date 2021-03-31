import React from 'react';
import me from './images/myImage.jpg';
import htmlIcon from './images/htmlicon.png'
import cssIcon from './images/cssicon.png'
import reactIcon from './images/reacticon.png'
import vueIcon from './images/vueicon.png'
import mongoIcon from './images/mongoicon.png'
//import fundo from './fundo.jpg';
//<img src={fundo} id="fundo" alt="fundo" />
import './Main.css';

const Main = (props) => {
    return (
        <main>

            <ul className="designer">
                <h1>{props.designer}</h1>
                <p>Designer de interface, com paixão por criar experiências <br></br> de usuário bonitas e funcionais.<br></br>Minimalista que acredita que menos é mais.</p>
            </ul>


            <img src={me} id="myImage" alt="me" />


            <div className="coder">
                <h1>&lt;{props.coder}&gt;</h1>
                <p>Um Gamer que ama ter que codar todos os dias<br></br> e que se encanta cada dia mais e mais<br></br> por tecnologia da informação, principalmente pelas partes<br></br> de criação de apps e Pentest.</p>
            </div>
        </main>
    );
};

export default Main;