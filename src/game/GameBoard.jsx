import BiologiaMolecular from "./especialidades/BiologiaMolecular";
import Biotecnologia from "./especialidades/Biotecnologia";
import Temeperatura from "./especialidades/Temperatura";
import CienciasSeparacion from "./especialidades/CienciasSeparacion";
import Especialidades from "./especialidades/Especialidades";
import Inolab from "./especialidades/Inolab";

const GameBoard = () => {

  return (
    <div className="gameBoardContainer">

      <div className="gameBoardOptions">
            <CienciasSeparacion/>
            <Biotecnologia/>
            <BiologiaMolecular/>
            <Temeperatura/>
            <Especialidades/>
            <Inolab/>
      </div>
    </div>
  );
};

export default GameBoard;
