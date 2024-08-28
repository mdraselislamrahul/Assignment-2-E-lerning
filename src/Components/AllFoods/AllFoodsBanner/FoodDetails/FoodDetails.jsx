import React, { useEffect, useRef } from "react";
import DetilsBanner from "./DetailsBanner/DetilsBanner";
import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FoodDetails = () => {
  const foodDetaile = useLoaderData();
  //   console.log(Fooddetailes);
  const { _id, ImageUrl, Name, Details, Category, Price, Rating } = foodDetaile;

  useEffect(() => {
    AOS.init();
  }, []);
  const QuntityRef = useRef();

  const handleOrder = () => {
    const quntity = QuntityRef.current.value;
    const image = ImageUrl;
    const name = Name;
    const category = Category;
    const all = { image, name, category, quntity };
    console.log(all);

    fetch("http://localhost:5000/foodsOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(all),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.insertedId) {
          Swal.fire({
            title: "Orded!",
            text: "Your food Orded Succcssfully.",
            icon: "success",
          });
        }
      });
  };

  const handleUpdateFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const Name = form.name.value;
    const Price = form.price.value;
    const Category = form.category.value;
    const Rating = form.rating.value;
    const ImageUrl = form.image.value;
    const Details = form.datiles.value;
    const updateFood = { Name, Price, Category, Rating, ImageUrl, Details };
    console.log(updateFood);

    fetch(`http://localhost:5000/foods/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateFood),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.modifiedCount > 0) {
          Swal.fire({
            title: "Update!",
            text: "Your food Upded Succcssfully.",
            icon: "success",
          })
          
        }
      });
  };

  return (
    <div>
      <DetilsBanner></DetilsBanner>
      <div className="max-w-2xl mx-auto mt-20">
        <div className="w-full shadow-xl card bg-base-100">
          <figure data-aos="fade-up" data-aos-duration="2000">
            <img className="w-full" src={ImageUrl} alt="Shoes" />
          </figure>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="card-body"
          >
            <h2 className="text-3xl font-bold card-title">{Name}</h2>
            <div className="flex items-center mt-4 text-xl font-bold text-red-900">
              <p>Price : $ {Price}</p>
              <p>Rating : {Rating}</p>
            </div>
            <p className="mt-4 text-xl font-bold text-gray-500">{Details}</p>
            <p className="mt-4 text-lg font-bold">Category: {Category}</p>

            <div className="z-0 justify-center mt-10 card-actions">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                data-aos="fade-right"
                data-aos-duration="2000"
                className="py-3 text-white bg-red-900 rounded-md px-7"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Update Food
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="text-lg font-bold">Update Food Details</h3>

                  <p className="py-4">
                    <form onSubmit={handleUpdateFood}>
                      <div className="max-w-xl mx-auto mt-5">
                        <div className="flex gap-10 mt-10">
                          <div className="md:w-1/2">
                            <input
                              defaultValue={Name}
                              placeholder="Food Name"
                              className="w-full px-5 py-3 border border-red-900 rounded-lg"
                              type="text"
                              name="name"
                            />
                            <input
                              defaultValue={Price}
                              placeholder="Price"
                              className="w-full px-5 py-3 mt-5 border border-red-900 rounded-lg"
                              type="number"
                              name="price"
                              id=""
                            />
                          </div>

                          <div className="md:w-1/2">
                            <input
                              defaultValue={Category}
                              placeholder="Food Category"
                              className="w-full px-5 py-3 border border-red-900 rounded-lg"
                              type="text"
                              name="category"
                            />
                            <input
                              defaultValue={Rating}
                              placeholder="Rating"
                              className="w-full px-5 py-3 mt-5 border border-red-900 rounded-lg"
                              type="text"
                              name="rating"
                              id=""
                            />
                          </div>
                        </div>
                        <input
                          defaultValue={ImageUrl}
                          placeholder="Image Url"
                          className="w-full px-5 py-3 mt-5 border border-red-900 rounded-lg"
                          type="text"
                          name="image"
                          id=""
                        />
                        <textarea
                          defaultValue={Details}
                          placeholder="Food Details"
                          className="w-full h-32 px-5 py-3 mt-5 border border-red-900 rounded-lg"
                          name="datiles"
                          id=""
                        ></textarea>
                        <input
                          className="py-3 mt-5 text-white bg-red-900 rounded-md btn px-7"
                          type="submit"
                          value="Update Foot"
                        />
                      </div>
                    </form>
                  </p>

                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>

              <button
                onClick={handleOrder}
                data-aos="fade-left"
                data-aos-duration="2000"
                className="py-3 text-white bg-red-900 rounded-md px-7"
              >
                Order Now
              </button>
              <input
                ref={QuntityRef}
                className="w-20 h-12 px-3 text-xl font-bold border border-red-900 rounded-md"
                name="Quntity"
                type="number"
                min="1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
