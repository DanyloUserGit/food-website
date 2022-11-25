import MenuElement from "./MenuElement";
import styled from '../../css-modules/Navbar.module.css';

function Menu(props)
{
    return (
           <ul className={styled.__menu__}>
                <MenuElement text={"Home"}/>
                <MenuElement text={"List"}/>
                <MenuElement text={"Search"}/>
           </ul>
    );
}

export default Menu;