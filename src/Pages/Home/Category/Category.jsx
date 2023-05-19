// import { useEffect, useState } from "react";
// import CategoryTab from "../Home/CategoryTab/CategoryTab";

// const Category = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5500/categories")
//       .then((res) => res.json())
//       .then((data) => {
//         setCategories(data);
//       });
//   }, []);

//   return (
//     <>
//       <h1 className="text-4xl font-bold text-center mt-40">Categories</h1>
//       <hr className="border-2 border-black w-1/3 mx-auto mt-4 mb-10" />

//       <div className="text-center mt-20">
//         {categories.map((category) => (
//           <CategoryTab key={category._id} category={category}></CategoryTab>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Category;
