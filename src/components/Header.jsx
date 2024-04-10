import { Link } from "react-router-dom";
import "./Header.css";
import { GiSoundWaves } from "react-icons/gi";

const Header = () => {
  return (
    <header className="Header">
      <nav>
        <Link className="logo-container">
          <GiSoundWaves id="logo-icon" />
          <span>Beat Browser</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
