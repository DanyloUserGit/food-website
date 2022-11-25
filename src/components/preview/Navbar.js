import Logo from "./Logo";
import Menu from "./Menu";
import styled from '../../css-modules/Navbar.module.css';

function Navbar(props){
    return (
        <div className={styled.__navbar__}>
            <Logo text={"Recipe"}/>
            <Menu />
        </div>
    );
}

export default Navbar;