import "./App.css";
import { useEffect, useState } from "react";
import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";

const App = () => {
  const[movies, setMovies] = useState([]);

  //Utilazando uma CHAVE de API do arquivo .env
  const apikey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `http://www.omdbapi.com/?apikey=${apikey}`;

  //Criando a conexão da API e trazendo informações
const searchMovies = async (title) => {
  const response = await fetch(`${apiUrl}&s=${title}`);
  const data = await response.json();
  
  //Alimentando a variavel movies
  setMovies(data.Search);
};

useEffect(() => {
  searchMovies("Batman");
}, []);

  return (
    <div>
      <div id="App">
        <img
          id="Logo"
          src={logo}
          alt="Logo da plataforma de streaming DEVFLIX em destaque, com fundo preto e letras vermelhas, otimizado para busca por conteúdo de streaming e entretenimento."
        />

        <div className="search">
          <input type="text" placeholder="Pesquise por filmes e series..." />
          <img src={lupa} alt="Botão de ação para pesquisa" />
        </div>

<div className="container">
  {movies.map((movie) => (}

</div>
       
      </div>
      <Rodape link="https://github.com/JoaoGaBriel4504">Joao Gabriel</Rodape>
    </div>
  );
};

export default App;
