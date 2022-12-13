import { useState } from "react";
import { data } from "./data";

function Buttons({ filteredJewelry }){
    const [products, setProducts] = useState(data);
    
    return(
        <div className="cont">
        
            <button className="change" onClick={ ()=> products(data)}>Ver todo </button>
            <button className="change" onClick={ ()=> filteredJewelry("anillo") }>Anillos </button>
            <button className="change" onClick={ ()=> filteredJewelry("pendientes") }>Pendientes </button>
            <button className="change" onClick={ ()=> filteredJewelry("pulsera") }>Pulseras</button>
        </div>
    )
}

export default Buttons;

