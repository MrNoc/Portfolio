
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Section from './Section/Section';
//import me from './Main/images/fundo.jpg';

function App() {
  return (
    <body>
    <div className="App">
      
      <Header home="Home" about="About" featured="Featured" portfolio="Portfolio"/>
      
      <Main designer="Designer" coder="Coder"/>

      <Section />

      <Footer />
    </div>
    </body>
  );
}

export default App;
