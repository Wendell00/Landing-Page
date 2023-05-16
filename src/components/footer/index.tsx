import { FooterStyles } from "./styles";

export const Footer = () => {

  return (
    <FooterStyles>
      <div className="topFooter" id="contact">
        <div className="imgFooter">
          <div className="text-container">
            <div className="title-footer">
                    <h1 className="title-section">
                      FIND POWERADE NEAR YOU
                    </h1>
                  <button className="btn-Learn">FIND NOW</button>
            </div>
          </div>
        </div>  
      </div>
      <footer>
        <div className="container">
          <div className="imgContainer">
            <img src="./powerade-logo.png" alt="" />
          </div>
          <div className="textContainer">
            <h3>CONNECT WITH US</h3>
            <ul>
              <li><img src="./footer/facebookFooter.png"/></li>
              <li><img src="./footer/twitterFooter.png"/></li>
              <li><img src="./footer/instagramFooter.png"/></li>
              <li><img src="./footer/youtubeFooter.png"/></li>
              <li><img src="./footer/tiktokFooter.png"/></li>
            </ul>
            <div className="copyright">
            <p>© 2023 <span>The Coca-Cola Company </span> All Rights Reserved <br />

                POWERADE is a registered trademark of The Coca-Cola Company</p>
          </div>
          </div>
        </div>
      </footer>
      <div className="credits">
        <p> <a href="https://github.com/Wendell00" target="_blank"> Developed by Wendell Borges</a> </p>
      </div>
    </FooterStyles>
  );
};