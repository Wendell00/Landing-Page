import { InfoProductsStyles } from './styles'
import { useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'

export const InfoProduct = () =>{

    const {modal, setModal} = useContext(FormContext)

    return(
        <InfoProductsStyles>
            {
                modal ? <div className='infoProductsContainer'>
                <div className="modal">
                        <div className='titleModal'>
                                <h1>POWERADE 50% MORE ELECTROLYTES</h1>
                        </div>
                        <div className='descriptionModal'>
                                <p>The ION4 Advanced Electrolyte System helps replenish four
                                electrolytes lost in sweat. Powerade is formulated with a
                                6% carbohydrate solution to help provide energy to working
                                muscles, and vitamins B3, B6 and B12.Powerade
                                </p>
                        </div>

                        <div className='flavors'>
                            <div className="close" onClick={() =>{
                                setModal(false)
                            }}>
                                <img src="./marca-cruzada.svg" alt="" />
                            </div>
                            <div className="labels">
                                <p className='blueText'>Mixed Berry</p>
                                <p className='orangeText'>Orange</p>
                                <p className='whiteText'>White Cherry</p>
                                <p className='greenText'>Lime</p>
                                <p className='purpleText'>Grape</p>
                            </div>

                            <div className="circles">
                                <div className="blueCircle circle1" > <img src="./iconForCircle.png"/> </div>
                                <div className="orangeCircle circle2" > <img src="./iconForCircle.png"/> </div>
                                <div className="whiteCircle circle3" > <img src="./iconForCircle.png"/> </div>
                                <div className="greenCircle circle4" > <img src="./iconForCircle.png"/> </div>
                                <div className="purpleCircle circle5" > <img src="./iconForCircle.png"/> </div>
                            </div>

                            <div className="ingredients">
                                <p className="ingredients-text">
                                *Per 12 fl oz: POWERADE • 240mg (Sodium), 80mg
                                (Potassium); Leading Sports Drink - 160mg (Sodium), 50mg
                                (Potassium), © 2023 The Coca-Cola Company.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
             : '' }
            
        </InfoProductsStyles>
    )
}
