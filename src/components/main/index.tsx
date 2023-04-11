import { MainStyles } from './styles'

export const Main = () =>{
    return(
        <MainStyles>
            <div className='mainContainer'>
                <div className='bg-cont'>
                    <div className='img-powerade'>
                        <img src="./Powerade.svg" alt="" />
                    </div>
                    <div className='bg-text'></div>
                </div>
            </div>
        </MainStyles>
    )
}