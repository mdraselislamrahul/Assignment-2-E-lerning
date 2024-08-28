import React from 'react';
import img from "./Image/11.png"
import img1 from "./Image/7.png"
const CustomerBanner2 = () => {
    return (
        <div>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="px-10 border-4 border-l-red-900">
            <img className="mt-10" src={img1} alt="" />
            <h1 className="mt-10 text-4xl font-bold">James Smith List <br /> Specifications 2023</h1>
            <p className="py-6 text-xl text-gray-500">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumendabr
              <br />
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
           <h4 className="mb-16">
            <span className="text-2xl font-bold">Reson Roy </span>
            <span>-Regular Custumar</span>
           </h4>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CustomerBanner2;