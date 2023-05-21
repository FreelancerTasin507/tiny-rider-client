import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../../public/useTitle";
import Loader from "../Loader/Loader";

const AllToys = () => {
  const [categories, setCategories] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useTitle('AllToys')

  console.log(categories);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    fetch("http://localhost:5500/allToys")
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data);
        setCategories(data);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          <div className="container mx-auto p-4">
            <h1 className="text-5xl font-bold mb-4 text-center">All Toys</h1>
            <hr className="border-2 border-black w-1/3 mx-auto mt-4 mb-10" />

            <table className="w-full border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 ">Seller</th>
                  <th className="p-2 ">Toy Name</th>
                  <th className="p-2 ">Sub-category</th>
                  <th className="p-2 ">Price</th>
                  <th className="p-2 ">Available Quantity</th>
                  <th className="p-2 "></th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td className="p-2 pl-5">{category.sellerName}</td>
                    <td className="p-2 pl-5">{category.name}</td>
                    <td className="p-2 pl-5">{category.category}</td>
                    <td className="p-2 pl-5">{category.price}</td>
                    <td className="p-2 pl-10">{category.quantity}</td>
                    <td className="p-2 ">
                      <Link to={`/viewDetails/${category._id}`}>
                        <button className="btn btn-secondary font-bold  rounded">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default AllToys;
