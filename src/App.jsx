import './App.css'; 
import './style.css'; 
import GameBoard from './game/GameBoard';
import logo from '../src/assets/logoInolabCalado200x80.png'

const Card = () => {

  return (
    
      <div className="area">
                <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
                <div className='appContainer'>
      <h1 className='boardTitle'><img src={logo} alt="" /></h1>
      <GameBoard/>
      </div>
        </div> 
      
   
  );
};

export default Card;
