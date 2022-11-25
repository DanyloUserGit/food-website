import styled from '../../css-modules/Examples.module.css';

function CardImage(props){
    return (
        <img src={props.src} alt={props.alt} className={styled.__cardImage__}></img>
    );
}

export default CardImage;