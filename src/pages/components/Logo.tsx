import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <img src="/Logo.svg" alt="Логотип" className="logo-img"/>
        </Link>
    );
};

export default Logo;

