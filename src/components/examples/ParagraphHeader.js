import styled from '../../css-modules/Examples.module.css';

function ParagraphHeader(props){
    return (
        <h1 className={styled.__paragraph__header__}>{props.text}</h1>
    );
}

export default ParagraphHeader;