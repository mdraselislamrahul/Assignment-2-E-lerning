import React, { useEffect } from "react";
import img from "./Image/exparience.png";
import img1 from "./Image/5.png";
import img2 from "./Image/6.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const HomeAbout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="gap-10 px-10 mt-32 md:flex">
      {/* 1st Side */}
      <div data-aos="fade-right" data-aos-duration="2000" className="mt-16">
        <img src={img} alt="" />
      </div>
      {/* 2nd side */}
      <div data-aos="fade-left" data-aos-duration="2000">
        <h4 className="text-xl italic font-bold text-red-900">About Us</h4>
        <h1 className="mt-5 text-4xl font-bold">Why We Are The Best</h1>
        <p className="mt-5 text-xl text-gray-500">
          Quis autem vel eum iure reprehenderit qui in evoluptate velit esse qua
          nihil <br />
          molestiae consequatur, vel illum qui dolorem eum fugiat quvoluptas
          nulla <br />
          pariatureaque ipsa quae ab illo inventore veritatis et quasi
          architecto <br />
          beatae vitae dicta sunt explicabo.
        </p>

        <div className="flex gap-10 mt-10">
          <div className="mt-10">
            <img src={img1} alt="" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Buffet Service</h1>
            <p className="mt-3 text-lg text-gray-500">
              Qariatureaque ipsa quae a illo inventore veritatis et quasi
              architecto
            </p>
          </div>
        </div>

        <div className="flex gap-10 mt-10">
          <div className="mt-10">
            <img src={img2} alt="" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Online Booking</h1>
            <p className="mt-3 text-lg text-gray-500">
              Qariatureaque ipsa quae a illo inventore veritatis et quasi
              architecto
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Link
            to="/about"
            className="px-10 py-3 text-white bg-red-900 rounded-md"
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
