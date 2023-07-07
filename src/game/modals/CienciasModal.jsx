import { useState } from 'react';
import question from '../modals/questions/cienciasSeparacion.json'

const CienciasModal = ({setModal, selectedIndex}) => {
const [showAsnwer, setShowAnswer ] = useState(false)
const closeModal = () => {
  setModal(false)
}

  return (
    <div className='modalWindowCont'>
        <div className='modalQuest'>
          <h1>Pregunta: {question[selectedIndex].id} </h1>
          <h3 className='question'>{question[selectedIndex].question}</h3>
        </div>

        <div className="modalAnswer">
          {/* <h1>Answer: </h1> */}
          
          <h3 className='answer'>{showAsnwer? question[selectedIndex].answer : "¿¿¿¿¿?????"}</h3>
          <button className='show' onClick={() => setShowAnswer(!showAsnwer)}>Show Answer</button>
        </div>
          <button className='closeModal' onClick={closeModal}>Close</button>

    </div>
  );
};

export default CienciasModal;
