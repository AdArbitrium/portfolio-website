import style from "./carousel.module.css";

import Slide1 from './slide1';

function Carousel() {
  return (
    <div id={style.mainbackground}>
      <div id={style.layer2}>
        <div className={style.slider}>
          {/*   <a href="#slide_1">1</a>
    <a href="#slide_2">2</a>
    <a href="#slide_3">3</a>
    <a href="#slide_4">4</a>
    <a href="#slide_5">5</a> */}

          <div className={style.slides}>
            <div id="slide_1"><Slide1 /></div>
            <div id="slide_2">2</div>
            <div id="slide_3">3</div>
            <div id="slide_4">4</div>
            <div id="slide_5">5</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
