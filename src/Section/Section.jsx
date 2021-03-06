import React from 'react';
import './Section.css';
import myGame from '../Main/images/game-image.png'
import devRadar from '../Main/images/devRadar-image.png'
import me from '../Main/images/me.jpg'

import html from '../Main/images/htmlicon.png'
import css from '../Main/images/cssicon.png'
import vue from '../Main/images/vueicon.png'
import sql from '../Main/images/sql.png'
import mongoDB from '../Main/images/mongoicon.png'
import logo from '../Header/logo.svg'






/*
import cssIcon from '../Main/images/cssicon.png'
import reactIcon from '../Main/images/reacticon.png'
import vueIcon from '../Main/images/vueicon.png'
import mongoIcon from '../Main/images/mongoicon.png'
*/
function aside(props) {
    return (
        <section>

            {/** Criar moldura de celular em volta da imagem do app. */}

            <div className="last-projects">

                <ul className="items">
                    <div id="devRadar">
                        <a href="https://github.com/MrNoc/Dev-Radar" target="blank"><h2>{props.devRadar}</h2><img src={devRadar} id="devRadar" /></a>

                    </div>


                    <li className="my-game-box">

                        <li className="my-game-box-inner">
                            <li className="my-game-box-front">
                                <h2>{props.crazyRolling}</h2>
                            </li>

                            <li className="my-game-box-back">
                                <li><a href=" https://github.com/MrNoc/CrazyRolling" target="blank"><img src={myGame} id="my-game-inner" alt="my-game-inner" width="100%" height="100%" /></a></li>
                            </li>
                        </li>
                    </li>
                </ul>
            </div>


            <div id="about-container" className="about-container">
                {/** Criar efeito de chegada na pagina junto com scroll */}
                {/** Criar span com link indo pro site do dota 2 e da calistenia. */}
                <div className="about-me">
                    <h1 >{props.sobreTitle}</h1>
                    <a>{props.sobreIntro}</a>
                    <a>{props.sobreDescription}</a>


                </div>
                <a><img src={me} alt="me" width="357" height="360" /></a>

            </div>

            <h3 id="skills"><p>Tecnologias:</p></h3>



            <div className="techs">
                <a><img src={html} /></a>
                <a><img src={css} /></a>
                <img src={logo} id="React-Logo" />
                <a><img src={vue} /></a>
                <a><img src={sql} /></a>
                <a><img src={mongoDB} /></a>
                
                <div className="skills"> </div>
                <h2 id="frase-motiv">Tente uma, duas, tr??s vezes e se poss??vel tente a quarta, a quinta e quantas vezes for necess??rio. S?? n??o desista nas primeiras tentativas, a persist??ncia ?? amiga da conquista. Se voc?? quer chegar a onde a maioria n??o chega, fa??a o que a maioria n??o faz. <br></br>Bill Gates </h2>
            </div>




        </section>
    );
}

export default aside;