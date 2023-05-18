import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaUserCircle,
} from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="mt-2 flex justify-center items-center bg-slate-600 p-2 rounded-3xl">
        <div className="md:hidden text-white">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <div className="navbar">
          <Link to="/" className=" md:ml-10">
            <img
              className="h-[75px]"
              src="https://i.ibb.co/bWFH6xn/logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="md:flex md:w-[70%] justify-center items-center  hidden ">
          <motion.li
            className="list-none text-lg font-semibold hover:bg-slate-500 rounded-full px-3 py-1"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.4 }}
          >
            <Link className=" font-semibold text-white" to="/">
              Home
            </Link>
          </motion.li>
          <motion.li
            className="list-none text-lg font-semibold hover:bg-slate-500 rounded-full px-3 py-1"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5 }}
          >
            <Link className=" font-semibold text-white" to="/allToys">
              All Toys
            </Link>
          </motion.li>
          <motion.li
            className="list-none text-lg font-semibold hover:bg-slate-500 rounded-full px-3 py-1"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <Link className=" font-semibold text-white" to="/myToys">
              My Toys
            </Link>
          </motion.li>
          <motion.li
            className="list-none text-lg font-semibold hover:bg-slate-500 rounded-full px-3 py-1"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <Link className=" font-semibold text-white" to="/addToy">
              Add A Toy
            </Link>
          </motion.li>
          <motion.li
            className="list-none text-lg font-semibold hover:bg-slate-500 rounded-full px-3 py-1"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <Link className=" font-semibold text-white" to="/blogs">
              Blogs
            </Link>
          </motion.li>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-5">
            <FaUserCircle className="w-10 rounded-full text-4xl mt-1">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </FaUserCircle>
          </label>
        </div>
        {/* Small Icon */}
      </div>
      <div
        className={`bg-slate-600 md:hidden w-[80vw] h-[50vh] flex flex-col text-center gap-8 absolute z-10 duration-700 ${
          isOpen === true ? "left-0" : "-left-96"
        }`}
      >
        <Link
          className=" font-semibold text-white hover:bg-slate-500 py-2 mt-10"
          to="/"
        >
          Home
        </Link>
        <Link
          className=" font-semibold text-white hover:bg-slate-500 py-2"
          to="/allToys"
        >
          All Toys
        </Link>
        <Link
          className=" font-semibold text-white hover:bg-slate-500 py-2"
          to="/myToys"
        >
          My Toys
        </Link>
        <Link
          className=" font-semibold text-white hover:bg-slate-500 py-2"
          to="/addToy"
        >
          Add A Toy
        </Link>
        <Link
          className=" font-semibold text-white hover:bg-slate-500 py-2"
          to="/blog"
        >
          Blogs
        </Link>

        <div className="flex gap-5 mx-auto">
          <a className="text-3xl text-white" href="">
            <FaFacebook />
          </a>
          <a className="text-3xl text-white" href="">
            <FaTwitter />
          </a>
          <a className="text-3xl text-white" href="">
            <FaInstagram />
          </a>
          <a className="text-3xl text-white" href="">
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
