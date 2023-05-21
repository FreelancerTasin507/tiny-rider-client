import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../../public/useTitle";
import { AuthContext } from "../../../Providers/AuthProvider";
import Loader from "../Loader/Loader";

const MyToys = () => {
  useTitle('MyToys')
  const { userInfo } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  // const [remaining, setRemaining] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(toys);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    fetch(`https://toy-shop-nine.vercel.app/singleEmail/getEmail?email=${userInfo?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
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
        fetch(`https://toy-shop-nine.vercel.app/allToys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== _id);
              setToys(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div>
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
                    <th className="p-2 ">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {toys.map((toy) => (
                    <tr key={toy._id}>
                      <td className=" pl-10">{toy.sellerName}</td>
                      <td className=" pl-40">{toy.name}</td>
                      <td className=" pl-10">{toy.category}</td>
                      <td className=" pl-10">{toy.price}</td>
                      <td className=" pl-10">{toy.quantity}</td>
                      <td className="p-2 ">
                        <button
                          onClick={() => handleDelete(toy._id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                        >
                          Delete
                        </button>
                        <Link to={`/update/${toy._id}`}>
                          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
                            Update
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyToys;
