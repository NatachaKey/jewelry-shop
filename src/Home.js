import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Jewelry from "./Jewelry";

function Home(){


const [jewelry, setJewelry]= useState(data);

  const chosenJewelry = (searchTerm) =>{
    const newJewelry = data.filter(element=>element.searchTerm === searchTerm);
    setJewelry(newJewelry); 
  }

  return( <div>
    <div className="cont">
      <h2 className="back">Envío gratuito para los pedidos superiores a 2000$</h2>
    </div>
  <Buttons filteredJewelry={chosenJewelry}/>
  <Jewelry password={jewelry}/>
  
  </div>
  )
}

export default Home;