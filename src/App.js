
import './App.css';
// import Cabecalho from './componetes/Cabecalho';
// import Footer from './componetes/estilosDasPaginas/Footer';
// import Nav from './componetes/estilosDasPaginas/Nav';
import Conteudo from './componetes/Conteudo';

function App() {
  return (
    <div className="App">
      {/* <Cabecalho />
      <Nav /> */}
      <Conteudo tituloDaPagina={"Gerenciador de Favoritos"} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
