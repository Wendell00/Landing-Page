import { SectionStyles } from "./styles";
import { useState } from "react";
export const slider = () => {

  const [bottle50, setBottle50] = useState('./bottle50/mountainberryblast.png')  
  const [bottleZero, setBottleZero] = useState('./productZero/zswhitecherry.png')  
  const [power500, setPower500] = useState('./power500ml/powerLime.png')  

  function handleClick(url: string, product: string){
    if(product == '50') setBottle50(url)
    else if(product == 'zero') setBottleZero(url)
    else if(product =='power500') setPower500(url)
  }

  return (
    <SectionStyles>
      <div className="p1">
        <img src={power500} alt="" />
      </div>
      <div className="p2 greenBg">
        <div className="textContainer">
          <div className="containerContent">
            <h1>POWERADE ISOTONIC 500ML</h1>
            <p className="description colorBlack">
              Isotonic Powerade Pro 500ml each Powerade replenishes liquids, minerals and carbohydrates. Helps you perform at your best during prolonged or high-intensity physical activity (e.g., running). Now, to help you render your best, we've brought you the new ION4 formula. Provides sodium, potassium, calcium and magnesium, 4 of the two electrolytes we lose when we use them.
            </p>

            <div className="changeBottleContainer">
              <div className="circles-p1">
                <button className="limeCircle" onClick={() =>{handleClick('./power500ml/powerLime.png', 'power500')}}></button>
                <button className="orangeCircle" onClick={() =>{handleClick('./power500ml/powerOrange.png', 'power500')}}></button>
                <button className="purpleCircle" onClick={() =>{handleClick('./power500ml/powerPurple.png', 'power500')}}></button>
                <button className="blueCircle" onClick={() =>{handleClick('./power500ml/powerBlue.png', 'power500')}}></button>
                <button className="redCircle" onClick={() =>{handleClick('./power500ml/powerRed.png', 'power500')}}></button>
              </div>
            </div>

            <div>
              <button className="btn-Learn">LEAN MORE</button>
            </div>
            <p className="ingredients">
              Water, dextrose, acidity regulators (citric acid, malic acid, trisodium citrate, tripotassium citrate), fructose, stabilizers (Action Gum, E445), sweeteners (aspartame, acesulfame K), flavoring agents, vitamin B6.
            </p>
          </div>
        </div>
      </div>
    </SectionStyles>
  );
};