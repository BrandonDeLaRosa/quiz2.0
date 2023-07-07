import { useState } from "react";
import TemperaturaModal from "../modals/TemperaturaModal";

const Temperatura = () => {
  const [isFlipped, setIsFlipped] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (button) => {
    setIsFlipped((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));
    console.log("Carta jugada");
    const index = parseInt(button.replace("button", "")) - 1;
    setSelectedIndex(index);
    setShowModal(true);
  };

  return (
    <div>
      {showModal ? (
        <TemperaturaModal modal={showModal} setModal={setShowModal} selectedIndex={selectedIndex} />
      ) : (
        <section className="columns">
          <div className="column">
            <div className="columnName">Temperatura</div>

            <div className={`card ${isFlipped.button1 ? "flipped" : ""}`}>
              <div className="card-inner">
                <div className="card-front">
                  <button
                    onClick={() => handleClick("button1")}
                    className="partQuestions"
                  >
                    20
                  </button>
                </div>
                <div className="card-back">Carta jugada</div>
              </div>
            </div>

            <div className={`card ${isFlipped.button2 ? "flipped" : ""}`}>
              <div className="card-inner">
                <div className="card-front">
                  <button
                    onClick={() => handleClick("button2")}
                    className="partQuestions"
                  >
                    40
                  </button>
                </div>
                <div className="card-back">Carta jugada</div>
              </div>
            </div>

            <div className={`card ${isFlipped.button3 ? "flipped" : ""}`}>
              <div className="card-inner">
                <div className="card-front">
                  <button
                    onClick={() => handleClick("button3")}
                    className="partQuestions"
                  >
                    60
                  </button>
                </div>
                <div className="card-back">Carta jugada</div>
              </div>
            </div>

            <div className={`card ${isFlipped.button4 ? "flipped" : ""}`}>
              <div className="card-inner">
                <div className="card-front">
                  <button
                    onClick={() => handleClick("button4")}
                    className="partQuestions"
                  >
                    80
                  </button>
                </div>
                <div className="card-back">Carta jugada</div>
              </div>
            </div>

            <div className={`card ${isFlipped.button5 ? "flipped" : ""}`}>
              <div className="card-inner">
                <div className="card-front">
                  <button
                    onClick={() => handleClick("button5")}
                    className="partQuestions"
                  >
                    100
                  </button>
                </div>
                <div className="card-back">Carta jugada</div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Temperatura;
