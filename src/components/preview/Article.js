import OrdinaryImage from "./OrdinaryImage";
import Button from "./Button";
import styled from "../../css-modules/Article.module.css";
import burger from "../../media/Burger.png";
function Article(props){
    return (
        <div className={styled.__article__}> 
            <div className={styled.__wrapper__}>
                <h1 className={styled.__article__header__}>{props.header}</h1>
                <span className={styled.__article__text__}>we have a lot of yummy recipes from <br/> all aruond the world.</span>
                <p><Button text={"See Recipes"}/></p>
            </div>
            <OrdinaryImage src={burger} alt="Burger"/>
        </div>
    );
}

export default Article;