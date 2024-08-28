import React from 'react';
import { Link, useRouteError } from "react-router-dom";

const ErrorPaje = () => {
    const error = useRouteError();
  console.error(error);

    return (
        <div className='text-center mt-32'>
        <h1 className='text-5xl font-bold'>Oops!</h1>
        <p className='mt-5 font-bold'>Sorry, an unexpected error has occurred.</p>
        <p className='font-bold mt-5'>
          <i>{error.statusText || error.message}</i>
        </p>
        <div className='mt-10'>
        <Link to="/" className='bg-red-900 text-white px-5 py-3'>Go Back Home</Link>
        </div>
      </div>
    );
};

export default ErrorPaje;