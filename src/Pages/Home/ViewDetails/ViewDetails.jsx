import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../public/useTitle";

const ViewDetails = () => {
  useTitle('ViewDetails')
  const singleData = useLoaderData();
  console.log(singleData);
  const {photo,name,sellerName,email,price,rating,quantity,description} = singleData


  return (
    <div className="mt-20 mb-20">
      <div className=" bg-white shadow-lg rounded-lg overflow-hidden flex items-center gap-10">
        <img className="w-[40%]" src={photo}  />

        <div className="px-4 py-4 space-y-5 w-[50%]">
          <h2 className="text-4xl font-bold text-gray-800">Toy Name: {name}</h2>
          <p className="text-gray-600 text-2xl font-semibold"><span className="text-black">Seller</span>:{sellerName} </p>
          <p className="text-gray-600 text-2xl font-semibold"><span className="text-black">Seller</span> Email: {email}</p>
          <p className="text-gray-600 text-2xl font-semibold"><span className="text-black">Price</span>: ${price}</p>
          <p className="text-gray-600 text-2xl font-semibold"><span className="text-black">Rating</span>: {rating}</p>
          <p className="text-gray-600 text-2xl font-semibold"><span className="text-black">Available</span> Quantity: {quantity}</p>
          <p className="text-gray-600 text-2xl font-semibold"><span className="text-black">Description</span>: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
