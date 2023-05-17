import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  //   const [error, setError] = useState("");
  //   const [success, setSuccess] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  return (
    <div>
      <img
        className="absolute w-[95%] h-[100%] top-[115px] rounded-2xl"
        src="https://i.ibb.co/GFcTdds/loginImg.jpg"
        alt=""
      />

      <div className="mt-10 md:w-[410px] mx-auto relative z-0 mb-10">
        <form className=" border p-10 shadow-2xl rounded-3xl">
          <h1 className="md:text-5xl text-4xl font-semibold mb-5 ">
            Register Please
          </h1>
          <hr className="border-2 border-black mb-5"/>
          <div>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="w-full px-3 py-2 mb-5 rounded-xl"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              id="photo"
              name="photo"
              type="text"
              autoComplete="photo"
              required
              className="w-full px-3 py-2 mb-5 rounded-xl"
              placeholder="Photo URL"
            />
          </div>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 mb-5 rounded-xl"
              placeholder="Email address"
            />
          </div>

          <div className="flex justify-center items-center gap-2">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 rounded-xl mb-3"
              placeholder="Password"
            />
            {showPassword ? (
              <FaEye onClick={togglePasswordVisibility} />
            ) : (
              <FaEyeSlash onClick={togglePasswordVisibility} />
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <p className="mt-2 text-red-600"></p>
          <p className="mt-3 text-slate-500">
            Already Have An Accout ?{" "}
            <Link className="text-blue-700" to="/login">
              Login
            </Link>
          </p>
          <input className="btn w-full mt-5" type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;
