import { MainStyles } from './styles'

export const Main = () =>{
    return(
        <MainStyles>
            <div className='mainContainer'>
                <div className='bg-cont'>
                    <div className='img-powerade'>
                        <img src="./Powerade.svg" alt="" />
                    </div>
                    <div className='bg-text'>
                        <h2>That's some <br></br> kind of power</h2>
                    </div>
                </div>
            </div>
        </MainStyles>
    )
}