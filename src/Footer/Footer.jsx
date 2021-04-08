import React from 'react';
import './Footer.css';
import linkedin from '../Main/images/linkedin.png'
import whatsapp from '../Main/images/whatsapp.png'

function Footer(props) {
    return (
        <footer>
            <div className="contato-container">
                {/** Criar efeito de chegada na pagina junto com scroll */}
                {/** Criar span com link indo pro site do dota 2 e da calistenia. */}
                {/** Você ficou 1 minuto parado lendo sobre mim. */}
                <div className="contato">
                    <h1 id="contact">{props.contactTitle}</h1>
                    <h2><a>{props.contactDescription}</a><br></br></h2>

                </div>

                <ul id="contato" className="social-contact">
                    <li>
                    <a href="https://www.linkedin.com/messaging/thread/new?recipients=List(urn%3Ali%3Afs_miniProfile%3AACoAABJWpCkBFEWAOXiNYGRvE7njMgN5w8v13EA)&composeOptionType=CONNECTION_MESSAGE&controlUrn=compose_message_button&referringModuleKey=NON_SELF_PROFILE_VIEW&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B6I6g0xinRy2Q1q0CRUE8Xw%3D%3D" target="blank" id="linkedin-icon"><img src={linkedin} />{props.linkedin}</a>
                    </li>

                    <li>
                    <a href="https://api.whatsapp.com/send?phone=5521966369718" target="blank" id="whatsapp-icon"><img src={whatsapp} />{props.whatsapp}</a>
                    </li>

                </ul>

            </div>
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