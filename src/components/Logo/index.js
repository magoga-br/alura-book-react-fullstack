import "./style.css";
import logo from "../../images/logo.svg";

function Logo() {
  return (
    <div className="logo">
      <img 
        src={logo} 
        className="logo-img" 
        alt="logo"
        />
      <p>
        <strong>Alura</strong>Books
      </p>
    </div>
  );
}

export default Logo;
