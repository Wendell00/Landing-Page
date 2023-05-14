import { SectionStyles } from "./styles";
import { HeroPattern } from './HeroPattern'

export const SectionPartners = () => {

  return (
    <SectionStyles>
      <div className="partnersContainer" id="partners">
        <div className="title-partners-container">
          <div className="title-partners">
              <h1>
                <b>PROPERTY </b> PARTNERSHIPS
              </h1>
          </div>
        </div>
        <div className="container">
          <div className="column">
            <img src="./partners/ncaa.png" alt="NCAA - Logo"/>
            <h2>NCAA</h2>
            <p className="desc-1">Official Sports Drink of the NCAA®</p>
            <p className="desc-2">NCAA is a trademark of the National Collegiate Athletic Association.</p>
          </div>
          <div className="column">
            <img src="./partners/olympics.png" alt="Olympics - Logo"/>
            <h2>OLYMPICS</h2>
            <p className="desc-1">Worldwide Partner</p>
          </div>
          <div className="column">
            <img src="./partners/us-olympics.png" alt="Us Olympics - Logo"/>
            <h2>TEAM USA</h2>
            <p className="desc-1">Worldwide Partner</p>
          </div>
          <div className="column">
            <img src="./partners/fifa.png" alt="Fifa - Logo"/>
            <h2>FIFA</h2>
            <p className="desc-1">Official Partner of FIFA</p>
          </div>
        </div>
        <HeroPattern/>
      </div>

      <div className="heigh20vh">
        
      </div>
    </SectionStyles>
  );
};