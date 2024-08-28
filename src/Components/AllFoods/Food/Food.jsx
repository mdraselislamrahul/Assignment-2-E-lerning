import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "./style.css";
import Swal from "sweetalert2";
const Food = ({ food, foods, setFoots }) => {
  console.log(food);
  const { _id, ImageUrl, Name, Details, Rating, Category } = food;

  useEffect(() => {
    AOS.init();
  }, []);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/foods/${_id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            if (json.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              })
              const remening = foods.filter(foo => foo._id !== _id);
              setFoots(remening);
            }
          });
      }
    });
  };

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
        className="w-full h-full shadow-xl foodCard card bg-base-100"
      >
        <figure>
          <img className="w-full" src={ImageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <button
            onClick={() => handleDelete(_id)}
            className="py-3 text-center text-white bg-red-900 rounded-md delete"
          >
            Delete Food
          </button>
          <h2 className="card-title">{Name}</h2>
          <p>{Details}</p>
          <div className="flex">
            <p className="font-bold text-red-900">Rating : {Rating}</p>
            <p className="font-bold text-red-900">Category : {Category}</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="2000"
            className="mt-10 card-actions"
          >
            <Link
              to={`/details/${_id}`}
              className="w-full py-3 text-center text-white bg-red-900 rounded-md"
            >
              Vew Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
