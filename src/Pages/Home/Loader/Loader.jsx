import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="ml-[45%] mt-40">
         <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
      </div>
    );
};

export default Loader;