import React from "react";

const Form = () => {
  return (
    <div className="max-w-5xl mx-auto mt-32 text-center">
      <h5 className="text-xl italic font-bold text-red-900">Contact Us</h5>
      <h1 className="mt-5 text-4xl font-bold">Please Get In Touch With Us</h1>
      <div className="max-w-3xl mx-auto">
        <div  className="flex gap-10 mt-10">
          <div className="md:w-1/2">
            <input placeholder="Your Name"
              className="w-full px-5 py-3 border border-red-900 rounded-lg"
              type="text"
            />
            <input placeholder="Your Phone"
              className="w-full px-5 py-3 mt-5 border border-red-900 rounded-lg"
              type="number"
              name=""
              id=""
            />
          </div>

          <div className="md:w-1/2">
            <input placeholder="Your Email"
              className="w-full px-5 py-3 border border-red-900 rounded-lg"
              type="email"
            />
            <input placeholder="Your Location"
              className="w-full px-5 py-3 mt-5 border border-red-900 rounded-lg"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <textarea placeholder="Comment"  className="w-full h-32 px-5 py-3 mt-5 border border-red-900 rounded-lg" name="" id=""></textarea>
        <button className="py-3 mt-5 text-white bg-red-900 rounded-md px-7">Sent Messege</button>
      </div>
    </div>
  );
};

export default Form;
