import { InfoProductsStyles } from './styles'
import { JSXElementConstructor, useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'

export const InfoProduct = () =>{

    const {modal, setModal, modalNum} = useContext(FormContext)

    interface JsxInterface{
        (): JSX.Element;
    }

    let title, desc, ingredients;
    let labels: JsxInterface = () => {return(<div></div>)}
    let circles: JsxInterface = () => {return(<div></div>)}

    switch (modalNum) {
        case 1:
            title = 'POWERADE 50% MORE ELECTROLYTES';
            desc = "The ION4 Advanced Electrolyte System helps replenish four electrolytes lost in sweat. Powerade is formulated with a 6% carbohydrate solution to help provide energy to working muscles, and vitamins B3, B6 and B12.Powerade"
            ingredients = "*Per 12 fl oz: POWERADE • 240mg (Sodium), 80mg (Potassium); Leading Sports Drink - 160mg (Sodium), 50mg (Potassium), © 2023 The Coca-Cola Company."
            labels = () => {
                return(
                    <><p className='blueText'>Mixed Berry</p>
                    <p className='orangeText'>Orange</p>
                    <p className='whiteText'>White Cherry</p>
                    <p className='greenText'>Lime</p>
                    <p className='purpleText'>Grape</p></>
                )
            }
            circles = () => {
                return(
                    <><div className="blueCircle circle1">
                        <img src="./iconForCircle.svg" /> </div><div className="orangeCircle circle2">
                            <img src="./iconForCircle.svg" /> </div><div className="whiteCircle circle3">
                            <img src="./iconForCircle.svg" /> </div><div className="greenCircle circle4">
                            <img src="./iconForCircle.svg" /> </div><div className="purpleCircle circle5">
                            <img src="./iconForCircle.svg" /> </div></>
                )
            }
            break;
        case 2:
            title = 'POWERADE ZERO';
            desc = "POWERADE Zero is a zero-calorie sports drink that provides advanced hydration for players who are serious about their game. A 6% carbohydrate solution provides energy to working muscles, plus vitamins B3, B6, and B12. It's the only nationally available sports drink with the ION4 advanced electrolyte system that replenishes four electrolytes lost in sweat."
            ingredients = "water, less than 1% of: citric acid, salt and mono-potassium phosphate and magnesium chloride and calcium chloride (electrolyte sources), natural flavors, sucralose, acesulfame potassium, vitamin b3 (niacinamide), vitamin b6 (pyridoxine hydrochloride), vitamin b12 (cyanocobalamin), blue 1, ascorbic acid (to protect taste), calcium disodium edta (to protect color)."
            labels = () => {
                return(
                    <><p className='whiteText'>White Cherry</p>
                    <p className='blueText'>Mountain Berry Blast</p>
                    <p className='orangeText'>Orange</p>
                    <p className='redText'>Fruit Punch</p>
                    <p className='purpleText'>Grape</p></>
                )
            }
            circles = () => {
                return(
                    <><div className="whiteCircle circle1">
                        <img src="./iconForCircle.svg" /> </div><div className="blueCircle circle2">
                            <img src="./iconForCircle.svg" /> </div><div className="orangeCircle circle3">
                            <img src="./iconForCircle.svg" /> </div><div className="redCircle circle4">
                            <img src="./iconForCircle.svg" /> </div><div className="purpleCircle circle5">
                            <img src="./iconForCircle.svg" /> </div></>
                )
            }
            break;
        case 3:
            title = 'POWERADE® SPORTS FREEZER BARS';
            desc = "POWERADE Zero is a zero-calorie sports drink that provides advanced hydration for players who are serious about their game. A 6% carbohydrate solution provides energy to working muscles, plus vitamins B3, B6, and B12. It's the only nationally available sports drink with the ION4 advanced electrolyte system that replenishes four electrolytes lost in sweat."
            ingredients = "water, high fructose corn syrup, contains 2% or less of the following: natural flavors, citric acid, sodium citrate, sodium benzoate and potassium sorbate (preservatives), monopotassium phosphate, calcium lactate, calcium gluconate, magnesium oxide, dicalcium phosphate, niacinamide (vitamin b3), pyridoxine hydrochloride (vitamin b6), cyanocobalamin (vitamin b12), red 40, blue 1."
            labels = () => {
                return(
                    <></>
                )
            }
            circles = () => {
                return(
                    <></>
                )
            }
            break;
        default:
            title = 'POWERADE ISOTONIC 500ML';
            desc = "Isotonic Powerade Pro 500ml each Powerade replenishes liquids, minerals and carbohydrates. Helps you perform at your best during prolonged or high-intensity physical activity (e.g., running). Now, to help you render your best, we've brought you the new ION4 formula. Provides sodium, potassium, calcium and magnesium, 4 of the two electrolytes we lose when we use them."
            ingredients = "Water, dextrose, acidity regulators (citric acid, malic acid, trisodium citrate, tripotassium citrate), fructose, stabilizers (Action Gum, E445), sweeteners (aspartame, acesulfame K), flavoring agents, vitamin B6."
            labels = () => {
                return(
                    <><p className='limeText'>Lime</p>
                    <p className='orangeText'>Orange</p>
                    <p className='purpleText'>Grape</p>
                    <p className='blueText'>Mountain Blast</p>
                    <p className='redText'>Tropical fruits</p></>
                )
            }
            circles = () => {
                return(
                    <><div className="limeCircle circle1">
                        <img src="./iconForCircle.svg" /> </div><div className="orangeCircle circle2">
                            <img src="./iconForCircle.svg" /> </div><div className="purpleCircle circle3">
                            <img src="./iconForCircle.svg" /> </div><div className="blueCircle circle4">
                            <img src="./iconForCircle.svg" /> </div><div className="redCircle circle5">
                            <img src="./iconForCircle.svg" /> </div></>
                )
            }
            break;
    }

    return(
        <InfoProductsStyles>
            {
                modal ? <div className='infoProductsContainer'>
                <div className="modal">
                        <div className='titleModal'>
                                <h1>{title}</h1>
                        </div>
                        <div className='descriptionModal'>
                                <p>{desc}
                                </p>
                        </div>

                        <div className='flavors'>
                            <div className="close" onClick={() =>{
                                setModal(false)
                            }}>
                                <img src="./marca-cruzada.svg" alt="" />
                            </div>
                            {modalNum != 3 ? 
                            <>
                                <div className="labels">
                                    {labels()}
                                </div>

                                <div className="circles">
                                    {circles()}
                                </div>
                            </>
                            :''}

                            <div className="ingredients">
                                <p className="ingredients-text">
                                    {ingredients}
                                </p>
                            </div>
                        </div>
                </div>
            </div>
             : '' }
            
        </InfoProductsStyles>
    )
}
