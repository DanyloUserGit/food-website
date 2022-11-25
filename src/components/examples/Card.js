import CardImage from "./CardImage";
import styled from '../../css-modules/Examples.module.css';

function Card(props){
    return (
        <div className={styled.__card__wrapper__}>
            <CardImage src={props.src} alt={props.alt}/>
            <div className={styled.__card__}>
                <h2 className={styled.__card__name__}>{props.name}</h2>
                <span className={styled.__card__description__}>{props.description}</span>
            </div>
        </div>
    );
}

export default Card;