import React from "react";
import img from "./Image/logo-white.png";
import img1 from "./Image/1.png";
import img2 from "./Image/2.png";
import img3 from "./Image/3.png";
import img4 from "./Image/4.png";
import img5 from "./Image/5.png";
import img6 from "./Image/6.png";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/xHNRF6d/footer-bg.png)",
      }}
    >
      <footer className="p-10 mt-20 mb-32 text-white footer bg-opacity-60 ">
        <aside>
          <img src={img} alt="" />
          <p className="mt-10">
            Lorem ipsum dolor sit <br /> consectetur, ame adipiscing elit,{" "}
            <br /> sed do
          </p>
          <p className="mt-5">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Quick links</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Menu</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">Service</a>
        </nav>
        <nav>
          <h6 className="footer-title">Instagram</h6>
          <div className="grid grid-cols-3 gap-2 mt-5">
            <img className="w-14" src={img1} alt="" />
            <img className="w-14" src={img2} alt="" />
            <img className="w-14" src={img3} alt="" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <img className="w-14" src={img4} alt="" />
            <img className="w-14" src={img5} alt="" />
            <img className="w-14" src={img6} alt="" />
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Subscribe</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      <hr />
      <footer className="items-center px-20 py-5 footer text-neutral-content">
        <aside className="items-center grid-flow-col">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
