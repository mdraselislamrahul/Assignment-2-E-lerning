import React from 'react';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
const Order = ({order}) => {
    console.log(order)
    const {_id ,image, name, category, quntity}=order;


    const handleDelete=(_id)=>{
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
            fetch(`http://localhost:5000/foodsOrder/${_id}`, {
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
                }
              });
          }
        });
    }
    return (
        <div className="flex items-center justify-between">
            <div className='w-full'>
            <img className='w-20' src={image} alt="" />
            </div>
            <h1 className="w-full font-bold text-red-900">{name}</h1>
            <h1 className="w-full font-bold text-red-900">{category}</h1>
            <h1 className="w-full font-bold text-red-900">{quntity}</h1>
            <button onClick={()=>handleDelete(_id)} className="w-full text-xl font-bold text-red-900"><MdDelete /></button>
        </div>
    );
};

export default Order;