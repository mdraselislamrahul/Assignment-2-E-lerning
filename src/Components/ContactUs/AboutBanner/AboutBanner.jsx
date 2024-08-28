import React from 'react';

const AboutBanner = () => {
    return (
        <div className="">
      <div
        className="h-80 hero"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/C6tD6xX/page-ban-bg.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AboutBanner;