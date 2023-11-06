import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

import Quiz from "../img/quiz.jpg";

import ExportPDFButton from "./pdfInformacoes";
import ExportPDFButtonTutorial from "./pdfTutorial";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <p>Acesse o tutorial antes de iniciar o jogo!</p>
        <div class="container">
          <img src={Quiz} alt="Início do Quiz" />
            <div class="button-container">
              <button onClick={() => dispatch({type: "CHANGE_STAGE"})}>Iniciar Jogo</button>
              <ExportPDFButtonTutorial />
              <ExportPDFButton />
            </div>
      </div>
    </div>
  );
};

export default Welcome;
