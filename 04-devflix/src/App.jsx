import "./App.css";
import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";

const App = () => {
  return (
    <div id="App">
      <img
        id="logo"
        src={logo}
        alt="Logo da plataforma de streaming DEVFLIX em destaque, com fundo preto e letras vermelhas, otimizado para busca por conteúdo de streaming e entretenimento."
      />

      <div className="search">
        <input type="text" placeholder="Pesquise por filmes e series..." />
        <img src={lupa} alt="Botão de ação para pesquisa" />
      </div>

      <Rodape>Joao Gabriel</Rodape>
    </div>
  );
};

export default App;
