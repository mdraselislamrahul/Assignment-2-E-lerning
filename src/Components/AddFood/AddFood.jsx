import React from "react";
import AddFoodBanner from "./AddfoodBanner/AddFoodBanner";
import Swal from 'sweetalert2'

const AddFood = () => {
  const handleAddFfFood = (e) => {
    e.preventDefault();
    const form=e.target;
    const Name = form.name.value;
    const Price = form.price.value;
    const Category = form.category.value;
    const Rating = form.rating.value;
    const ImageUrl = form.image.value;
    const Details = form.datiles.value;
    const newdata = { Name, Price, Category, Rating, ImageUrl, Details };
    console.log(newdata)


    fetch('http://localhost:5000/foods', {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(newdata)
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
         if(json.insertedId){
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Food Added Successfully",
                showConfirmButton: false,
                timer: 1500
              });
         }
      })
      
    
  };
  return (
    <div>
      <AddFoodBanner></AddFoodBanner>
      <form onSubmit={handleAddFfFood}>
      <div className="max-w-3xl mx-auto mt-20">
        <div className="flex gap-10 mt-10">
          <div className="md:w-1/2">
            <input
              placeholder="Food Name"
              className="w-full px-5 py-3 border border-red-900 rounded-lg"
              type="text"
              name="name"
            />
            <input
              placeholder="Price"
              className="w-full px-5 py-3 mt-5 border border-red-900 rounded-lg"
              type="number"
              name="price"
              id=""
            />
          </div>

          <div className="md:w-1/2">
            <input
              placeholder="Food Category"
              className="w-full px-5 py-3 border border-red-900 rounded-lg"
              type="text"
              name="category"
            />
            <input
              placeholder="Rating"
              className="w-full px-5 py-3 mt-5 border border-red-900 rounded-lg"
              type="text"
              name="rating"
              id=""
            />
          </div>
        </div>
        <input
          placeholder="Image Url"
          className="w-full px-5 py-3 mt-5 border border-red-900 rounded-lg"
          type="text"
          name="image"
          id=""
        />
        <textarea
          placeholder="Food Details"
          className="w-full h-32 px-5 py-3 mt-5 border border-red-900 rounded-lg"
          name="datiles"
          id=""
        ></textarea>
        <input className="py-3 mt-5 text-white bg-red-900 rounded-md btn px-7" type="submit" value="Add Foot" />
      </div>
      </form>
    </div>
  );
};

export default AddFood;
