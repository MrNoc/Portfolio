import React from 'react';
import './Section.css';
import myGame from '../Main/images/game-image.png'
import linkedin from '../Main/images/linkedin.png'
import whatsapp from '../Main/images/whatsapp.png'
import devRadar from '../Main/images/devRadar-image.png'
import me from '../Main/images/me.jpg'
import backToTop from '../Main/images/top.gif'


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
            
            <div id="portfolio" className="last-projects">
           
                <ul className="items">
                    <div id="devRadar">
                    <a> <h2>{props.devRadar}</h2><img src={devRadar} id="devRadar" /></a><a href="https://github.com/MrNoc/Dev-Radar" target="blank"></a>
                    
                    </div>
                   

                    <li className="my-game-box">

                        <li className="my-game-box-inner">
                            <li className="my-game-box-front">
                                <h2>{props.crazyRolling}</h2>
                            </li>

                            <li className="my-game-box-back">
                                <li><a><img src={myGame} id="my-game-inner" alt="my-game-inner" width="100%" height="100%" /></a></li>
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

            <div className="contato-container">
                {/** Criar efeito de chegada na pagina junto com scroll */}
                {/** Criar span com link indo pro site do dota 2 e da calistenia. */}
                {/** Você ficou 1 minuto parado lendo sobre mim. */}
                <div className="contato">
                    <h1 id="contact">{props.contactTitle}</h1>
                    <h2><a>{props.contactDescription}</a><br></br></h2>
                    
                </div>

                <ul className="social-contact">
                    <li id="linkedin-icon">
                        <img src={linkedin} />{props.linkedin}<a href="https://www.linkedin.com/messaging/thread/new?recipients=List(urn%3Ali%3Afs_miniProfile%3AACoAABJWpCkBFEWAOXiNYGRvE7njMgN5w8v13EA)&composeOptionType=CONNECTION_MESSAGE&controlUrn=compose_message_button&referringModuleKey=NON_SELF_PROFILE_VIEW&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B6I6g0xinRy2Q1q0CRUE8Xw%3D%3D" target="blank"></a>
                    </li>

                    <li id="whatsapp-icon">
                         <img src={whatsapp} />{props.whatsapp}<a href="https://api.whatsapp.com/send?phone=5521966369718" target="blank"></a>
                    </li>

                </ul>

            </div>
            <div className="back-top" >
                <a href="#top"><img src={backToTop} width="15%" height="15%" /></a>
                

            </div>

        </section>
    );
}

export default aside;