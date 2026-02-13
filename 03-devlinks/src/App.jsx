import "./App.css";
import Perfil from "./components/Perfil/Perfil";
import Link from "./components/Link/Link";
import SocialLink from "./components/SocialLink/SocialLink";
import Rodape from "./components/Rodape/Rodape";

function App() {
  return (
    <div id="App">

    <Perfil fotoPerfil={"https://placehold.co/100"}> Joao Gabriel</Perfil>
     <div className="switch"> botão switch </div>

     <div id="Link">
      <ul>
        <Link url={""}>Increva-se</Link>
        <Link url={""}>Minha playlist</Link>
        <Link url={""}>Me pague um café!</Link>
        <Link url={""}>Conheça o curso DEV</Link>
      </ul>
     </div>


      <div className="socialLinks">
        <SocialLink url={"https://github.com"} icon={"logo-github"} />
        <SocialLink url={"https://instagram.com"} icon={"logo-instagram"} />
        <SocialLink url={"https://youtube.com"} icon={"logo-youtube"} />
        <SocialLink url={"https://linkedin.com"} icon={"logo-linkedin"} />
      </div>
      

 <Rodape>JoaoGabriel</Rodape>
    </div>
  )
}

export default App
