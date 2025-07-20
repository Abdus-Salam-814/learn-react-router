import { NavLink, useNavigate } from "react-router-dom";
import '../../styleCss/style.css'
const Header = () => {
    const navigation = useNavigate();
    
    return (
        <nav className="flex gap-6 justify-center items-center">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/contect'}>Contect</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
        </nav>
    );
};

export default Header;