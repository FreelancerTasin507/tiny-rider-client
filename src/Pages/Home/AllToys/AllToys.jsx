import { useEffect, useState } from "react";

const AllToys = () => {
  const [categories, setCategories] = useState([]);

  console.log(categories);

  useEffect(() => {
    fetch("http://localhost:5500/allToys")
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data);
        setCategories(data);
      });
  }, []);

  return (
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
                  <button className="btn btn-secondary font-bold  rounded">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* {categories.map((category) => (
        <div key={category._id}>
          <div className="card grid grid-cols-1 md:grid-cols-3">
            <div className="card-header">
              <h3 className="card-title">Seller: {category.sellerName}</h3>
              <p>Toy Name : {category.name}</p>

              <h6 className="card-subtitle mb-2 text-muted">Sub-category: {category.category}</h6>
            </div>
            <div className="card-body">
              <div className="card-body-text">
                <p>Price: ${category.price}</p>
                <p>Available Quantity: {category.quantity}</p>
              </div>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">
                View Details
              </a>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default AllToys;
