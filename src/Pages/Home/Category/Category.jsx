import { useEffect, useState } from "react";
// import CategoryTab from "../CategoryTab/CategoryTab";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {
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
    <>
      <h1 className="text-4xl font-bold text-center mt-40">Categories</h1>
      <hr className="border-2 border-black w-1/3 mx-auto mt-4 mb-10" />

      <Tabs className="text-center">
        <TabList>
          <Tab>{categories[0]?.category}</Tab>
          <Tab>{categories[2]?.category}</Tab>
          <Tab>{categories[6]?.category}</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
            <div className="card w-96 bg-base-100 shadow-3xl">
              <figure className="h-[90%]">
                <img
                className="w-[100%] "
                  src={categories[0]?.photo}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body text-left">
                <h2 className="card-title">Name: {categories[0]?.name}</h2>
                <p>Price : {categories[0]?.price}</p>
                <p>Rating : {categories[0]?.rating}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-3xl">
              <figure className="h-[90%]">
                <img
                className="w-[100%] "
                  src={categories[1]?.photo}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body text-left">
                <h2 className="card-title">Name: {categories[1]?.name}</h2>
                <p>Price : {categories[1]?.price}</p>
                <p>Rating : {categories[1]?.rating}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-3xl">
              <figure className="h-[90%]">
                <img
                className="w-[100%] "
                  src={categories[3]?.photo}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body text-left">
                <h2 className="card-title">Name: {categories[3]?.name}</h2>
                <p>Price : {categories[3]?.price}</p>
                <p>Rating : {categories[3]?.rating}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
            <>
           
            </>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>

      {/* <div className="text-center mt-20">
        {categories.map((category) => (
          <CategoryTab key={category._id} category={category}></CategoryTab>
        ))}
      </div> */}
    </>
  );
};

export default Category;
