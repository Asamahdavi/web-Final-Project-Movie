/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import i1 from "../img/1.jpg";
import i2 from "../img/2.jpg";
import i3 from "../img/3.jpg";
import i4 from "../img/4.jpg";
import i5 from "../img/5.jpg";
import i6 from "../img/6.jpg";
import i7 from "../img/7.jpg";
import i8 from "../img/8.jpg";
import i9 from "../img/9.jpg";
export default class Carsouel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };
    return (
      <div className="flex justify-center z-0 ">
        
        <Slider {...settings} className="flex justify-center z-0 p-4 items-center  w-9/12   ">
          <div>
            <img src={i4} className="rounded-lg  h-5/6   shadow-2xl" />
          </div>
          <div>
            <h3><img src={i7}className="rounded-lg   shadow-2xl" /></h3>
          </div>
          <div>
            <h3><img src={i3}className="rounded-lg   shadow-2xl" /></h3>
          </div>
          <div>
          <h3><img src={i6}className="rounded-lg   shadow-2xl" /></h3>
          </div>
          <div>
          <h3><img src={i5}className="rounded-lg   shadow-2xl" /></h3>
          </div>
          <div>
          <h3><img src={i1}className="rounded-lg shadow-2xl" /></h3>
          </div>
          <div>
          <h3><img src={i2}className="rounded-lg   shadow-2xl" /></h3>
          </div>
          <div>
          <h3><img src={i8}className="rounded-lg  shadow-2xl" /></h3>
          </div>
          <div>
          <h3><img src={i9}className="rounded-lg  shadow-2xl" /></h3>
          </div>
        </Slider>
      </div>
    );
  }
}
