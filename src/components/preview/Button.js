import styled from "../../css-modules/Article.module.css";

function Button(props){
    return (
        <div className={styled.__button__}>
            <span>{props.text}</span>
        </div>
    );
}

export default Button;