import MainImage from "./MainImage";
import MainText from "./MainText";

const Main = () => {
  return (
    <div className="grid grid-cols-2 w-full px-6 mb-10">
      <div className="flex w-full">
        <MainText />
      </div>
      <div className="flex w-full">
        <MainImage />
      </div>
    </div>
  );
};

export default Main;
