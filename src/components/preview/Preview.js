import Article from "./Article";
import Navbar from "./Navbar";
import styled from "../../css-modules/Preview.module.css";

function Preview(props){
    return (
        <div className={styled.__preview__}>
            <Navbar />
            <Article header="Yummy Recipes"/>
        </div>
    );
}

export default Preview;