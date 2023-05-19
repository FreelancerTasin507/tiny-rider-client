import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className=" flex items-center justify-center bg-gray-100">
        <div className=" p-8 bg-white rounded-lg shadow-md">
          <img
            className="h-[80vh]"
            src="https://i.ibb.co/sg4VTR2/Screenshot-140.png"
            alt=""
          />
          <Link to="/">
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg focus:outline-none hover:bg-red-600">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
