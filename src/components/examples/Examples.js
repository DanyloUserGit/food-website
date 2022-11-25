import Card from "./Card";
import ParagraphHeader from "./ParagraphHeader";
import styled from '../../css-modules/Examples.module.css';
import dessert from "../../media/Dessert 1.png";
import drink from "../../media/drin 1.png";
import side_dish from "../../media/side_dish 1.png";
import main_dish from "../../media/main_dish 1.png";

function Examples(props){
    return (
        <div className={styled.__examples__}>
            <ParagraphHeader text="Recipes"/>
            <div className={styled.__wrapper__}>
                <Card src={dessert} alt="card image" name="Dessert" description="there is so many dessert recipes"/>
                <Card src={drink} alt="card image" name="Drinks" description="there is so many drinks recipes"/>
                <Card src={main_dish} alt="card image" name="Main Dishs" description="there is so many main dishes recipes"/>
                <Card src={side_dish} alt="card image" name="Side Dishs" description="there is so many side dishes recipes"/>
            </div>
        </div>
    );
}

export default Examples;