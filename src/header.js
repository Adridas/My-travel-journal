import logo from './earth.png';
import './App.css';

function Header() {
    return (
      <div className="header">
        <img src={logo} className="logo-img" alt="earth"/>
         <p>My Travel journal.</p>
     
      </div>
    );
  }
  
  export default Header;
  