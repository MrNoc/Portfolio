
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Section from './Section/Section';


//import me from './Main/images/fundo.jpg';
//Função construtora.

function App(titles) {
  return (
    <body>

      <div className="App">


        <Header
          sobre="Sobre"
          portfolio="Portfolio"
          contato="Contato"
        />

        <Main
          designer="Designer"
          coder="Coder"

        />



        <h3 id="portfolio">ÚLTIMOS PROJETOS</h3>
        <Section
          sobreTitle="Sobre mim"
          contactTitle="Contato"
          sobreIntro={`Criador de Websites e App's Mobile com a utilização do framework React/ReactNative.\n`}
          sobreDescription={`Gosto de transformar problemas complexos em designs simples, bonitos e intuitivos. Quando não estou empurrando pixels, você me encontrará cozinhando, assistindo animes, fazendo calistenia ou jogando meu sagrado Dota 2 .`}

          devRadar="Dev Radar"
          crazyRolling="Crazy Rolling"



        />

        <Footer
          contactDescription={`Quer entrar em contato?`}
          linkedin="Enviar uma mensagem pelo Linkedin"
          whatsapp="Enviar uma mensagem pelo pelo Whatsapp" />
      </div>
    </body>
  );
}

export default App;
