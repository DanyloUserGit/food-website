import styled from "../../css-modules/Article.module.css";

function OrdinaryImage(props){
    return (
        <img src={props.src} alt={props.alt} className={styled.__ordinaryImg__}></img>
    );
}

export default OrdinaryImage;