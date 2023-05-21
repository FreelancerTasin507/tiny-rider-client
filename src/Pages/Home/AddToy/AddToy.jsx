import { useContext } from "react";
import Swal from "sweetalert2";
import useTitle from "../../../../public/useTitle";
import { AuthContext } from "../../../Providers/AuthProvider";

const AddToy = () => {
  useTitle('AddToy')

  const {userInfo} = useContext(AuthContext)
  console.log(userInfo);

    const handelAddToy  = e =>{
        e.preventDefault();
        const form  = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const email = userInfo?.email ;
        const category =  form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value

        const toyData = {photo,name,sellerName,email,category,price,rating,quantity,description};
        console.log(toyData);

        fetch("http://localhost:5500/allToys",{
            method:"POST",
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(toyData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                  title: "Success!",
                  text: "Toy Added Successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
            }
        })
        

    }



  return (
    <div className="">
      <form onSubmit={handelAddToy} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pictureUrl"
            >
              Picture URL of the toy
            </label>
            <input
            name="photo"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pictureUrl"
              type="text"
              placeholder="Enter picture URL"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
            name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="sellerName"
            >
              Seller Name
            </label>
            <input
          value={userInfo?.displayName}
            name="sellerName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sellerName"
              type="text"
              placeholder="Enter seller name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="sellerEmail"
            >
              Seller Email
            </label>
            <input
            value={userInfo?.email}
            name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sellerEmail"
              type="email"
              placeholder="Enter seller email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="subcategory"
            >
              Sub-category
            </label>
            <select
            name="category"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subcategory"
            >
              <option>Sports Car</option>
              <option>Truck</option>
              <option>Police Car</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
            name="price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              placeholder="Enter price"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="rating"
            >
              Rating
            </label>
            <input
            name="rating"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="rating"
              type="number"
              step="0.1"
              min="0"
              max="5"
              placeholder="Enter rating"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="quantity"
            >
              Available Quantity
            </label>
            <input
            name="quantity"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity"
              type="number"
              placeholder="Enter quantity"
            />
          </div>
          <div className="mb-4 ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Detail Description
            </label>
            <textarea
            name="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Enter detail description"
            ></textarea>
          </div>
        </div>

        <br />
        <div className="text-center">
          <div>
            <input
              className="btn btn-secondary  text-white rounded-2xl "
              type="submit"
              value="Add Toy"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
