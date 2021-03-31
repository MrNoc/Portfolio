import React from 'react';
import './Section.css';
import myGame from '../Main/images/game-image.png'
import devRadar from '../Main/images/devRadar-image.png'
import backToTop from '../Main/images/top.gif'

/*
import cssIcon from '../Main/images/cssicon.png'
import reactIcon from '../Main/images/reacticon.png'
import vueIcon from '../Main/images/vueicon.png'
import mongoIcon from '../Main/images/mongoicon.png'
*/
function aside() {
    return (
        <section>
            {/** Criar moldura de celular em volta da imagem do app. */}
            <div className="header-center">


                <h3 id="section-title">Últimos projetos:</h3>


                <ul className="items">

                    <a> <h2>Dev Radar</h2><img src={devRadar} id="devRadar" alt="devRadar" /></a>

                    <li class="my-game-box">

                        <li class="my-game-box-inner">
                            <li class="my-game-box-front">
                                <h2>Crazy Rolling</h2>
                            </li>

                            <li class="my-game-box-back">
                                <li><a><img src={myGame} id="my-game-inner" alt="my-game-inner" width="100%" height="100%" /></a></li>
                            </li>
                        </li>
                    </li>
                </ul>
                <a className="top" href="#top"><div><a><img src={backToTop} id="my-game-inner" alt="my-game-inner" width="5%" height="5%" /></a></div></a>
            </div>

        </section>
    );
}

export default aside;