import { useState } from 'react';
import question from '../modals/questions/biologiaMolecular.json'

const BiologiaMolecularModal = ({setModal, selectedIndex}) => {
const [showAsnwer, setShowAnswer ] = useState(false)
const closeModal = () => {
  setModal(false)
}

  return (
    <div className='modalWindowCont'>
        <div className='modalQuest'>
          <h1 >Pregunta: {question[selectedIndex].id} </h1>
          <h3 className='question'>{question[selectedIndex].question}</h3>
        </div>

        <div className="modalAnswer">
          {/* <h1>Respuesta: </h1> */}
          <h3 className='answer'>{showAsnwer? question[selectedIndex].answer : "¿¿¿¿¿?????"}</h3>
          <button className='show' onClick={() => setShowAnswer(!showAsnwer)}>Show Answer</button>
        </div>
          <button className='closeModal' onClick={closeModal}>Close</button>

    </div>
  );
};

export default BiologiaMolecularModal;
