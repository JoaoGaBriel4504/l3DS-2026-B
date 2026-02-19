import React from "react";
import "./Rodape.module.css";

const Rodape = ({ children }) => {
  return (
    <footer>
      <p>
        Feito com 🫰🏻por Joao Gabriel <a href="https://github.com">{children}</a>
      </p>
    </footer>
  );
};

export default Rodape;
