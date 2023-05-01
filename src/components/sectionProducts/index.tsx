import { SectionStyles } from "./styles";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination, Autoplay} from 'swiper'
import { EffectFade } from "swiper";
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export const SectionProducts = () => {

  const [bottle50, setBottle50] = useState('./bottle50/mountainberryblast.png')  
  const [bottleZero, setBottleZero] = useState('./productZero/zsmixedberry.png')  

  function handleClick(url: string, product: string){
    if(product == '50') setBottle50(url)
    else if(product == 'zero') setBottleZero(url)
  }

  return (
    <SectionStyles>
      <div className="productsContainer">
        <div className="title-products">
          <h1>
            {" "}
            <b>FEATURED</b> PRODUCTS{" "}
          </h1>
        </div>
        <div className="section-products-container">
          <div className="section-1">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              grabCursor={true}
              effect={"fade"}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              autoplay={{
                delay: 15000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              loop
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="p1">
                  <img src={bottle50} alt="" />
                </div>
                <div className="p2 blueBg">
                  <div className="textContainer">
                    <div className="containerContent">
                        <h1>POWERADE 50% MORE ELECTROLYTES</h1>
                        <p className="description colorWhite">
                        The ION4 Advanced Electrolyte System helps replenish four
                        electrolytes lost in sweat. Powerade is formulated with a
                        6% carbohydrate solution to help provide energy to working
                        muscles, and vitamins B3, B6 and B12.Powerade
                        </p>

                        <div className="changeBottleContainer">
                        <div className="circles-p1">
                            <button className="blueCircle" onClick={() =>{handleClick('./bottle50/mountainberryblast.png', '50')}}></button>
                            <button className="orangeCircle" onClick={() =>{handleClick('./bottle50/orange.png', '50')}}></button>
                            <button className="whiteCircle" onClick={() =>{handleClick('./bottle50/whitecherry.png', '50')}}></button>
                            <button className="greenCircle" onClick={() =>{handleClick('./bottle50/melon.png', '50')}}></button>
                            <button className="purpleCircle" onClick={() =>{handleClick('./bottle50/grape.png', '50')}}></button>
                        </div>
                        </div>

                        <div>
                        <button className="btn-Learn">LEAN MORE</button>
                        </div>
                        <p className="ingredients">
                        *Per 12 fl oz: POWERADE • 240mg (Sodium), 80mg
                        (Potassium); Leading Sports Drink - 160mg (Sodium), 50mg
                        (Potassium), © 2023 The Coca-Cola Company.
                        </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="p1">
                  <img src={bottleZero} alt="" />
                </div>
                <div className="p2 whiteBg">
                  <div className="textContainer">
                    <div className="containerContent">
                        <h1>POWERADE ZERO</h1>
                        <p className="description colorBlack">
                        POWERADE Zero is a zero-calorie sports drink that provides advanced hydration for players who are serious about their game. A 6% carbohydrate solution provides energy to working muscles, plus vitamins B3, B6, and B12. It's the only nationally available sports drink with the ION4 advanced electrolyte system that replenishes four electrolytes lost in sweat.
                        </p>

                        <div className="changeBottleContainer">
                        <div className="circles-p1">
                            <button className="blueCircle" onClick={() =>{handleClick('./productZero/zsmixedberry.png', 'zero')}}></button>
                            <button className="orangeCircle" onClick={() =>{handleClick('./productZero/zsorange.png', 'zero')}}></button>
                            <button className="whiteCircle" onClick={() =>{handleClick('./productZero/zswhitecherry.png', 'zero')}}></button>
                            <button className="redCircle" onClick={() =>{handleClick('./productZero/zsfruitpunch.png', 'zero')}}></button>
                            <button className="purpleCircle" onClick={() =>{handleClick('./productZero/zsgrape.png', 'zero')}}></button>
                        </div>
                        </div>

                        <div>
                        <button className="btn-Learn">LEAN MORE</button>
                        </div>
                        <p className="ingredients">
                        water, less than 1% of: citric acid, salt and mono-potassium phosphate and magnesium chloride and calcium chloride (electrolyte sources), natural flavors, sucralose, acesulfame potassium, vitamin b3 (niacinamide), vitamin b6 (pyridoxine hydrochloride), vitamin b12 (cyanocobalamin), blue 1, ascorbic acid (to protect taste), calcium disodium edta (to protect color).
                        </p>
                    </div>
                    
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p1">
                  <img src="./productBars.png" alt="" />
                </div>
                <div className="p2 blackBg"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p1"></div>
                <div className="p2 greenBg"></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </SectionStyles>
  );
};