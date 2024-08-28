import React from 'react';
import { Link } from 'react-router-dom';
import img from "./Image/baner.png"
const Banner1 = () => {
    return (
        <div>
            <div className="card lg:card-side md:card-side bg-red-100 shadow-xl py-10">

                <div className="card-body md:w-1/2">
                    <h4 className='mt-10 text-xl font-bold text-red-900'>Best In Cafeu</h4>
                    <h2 className="font-bold text-5xl mt-5">BBQ Chicken <span className='text-red-900 underline'>Salad</span> <br /> with Creamy <br /> Avocado</h2>
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora, adipisci velit doloribus iste voluptatem amet, optio neque cumque eveniet, vero aut sint asperiores. Perspiciatis modi sit dolores aliquam suscipit.</p>

                    <div>
                        <button className='bg-red-900 px-7 py-3 text-white rounded-md'>Order Now</button>
                    </div>
                   
                </div>
                <figure className='md:w-1/2'>
                    <img
                        src={img}
                        alt="Album" />
                </figure>

            </div>
        </div>
    );
};

export default Banner1;