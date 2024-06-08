import { useState } from "react";
import FeatureTab from "../components/FeatureTab";

const Features = () => {
  const [feature, setFeature] = useState(0);

  const handleClick = (index) => {
    setFeature(index);
  };

  return (
    <section className="grid w-full place-items-center py-20 lg:pb-32">
      <div className="w-[90%] max-w-[35em] text-center">
        <p className="mb-3 text-[1.6rem] font-semibold leading-10 text-dark-blue sm:mb-5 sm:text-[2rem]">
          Features
        </p>
        <p className="leading-7 text-grayish-blue sm:text-[1.15rem] sm:leading-8">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <ul className="my-10 w-[80%] border-y-[1px] text-center text-grayish-blue *:flex-1 *:cursor-pointer *:py-5 sm:my-12 sm:flex sm:border-t-0 md:max-w-[50em]">
        <li
          onClick={() => handleClick(0)}
          className={`transition-colors duration-150 hover:text-soft-red  ${feature == 0 && "border-b-4 border-soft-red font-medium text-dark-blue"}`}
        >
          Simple Bookmarking
        </li>
        <li
          onClick={() => handleClick(1)}
          className={`border-y-[1px] transition-colors duration-150 hover:text-soft-red sm:border-t-0  ${feature == 1 && "border-b-4 border-b-soft-red font-medium  text-dark-blue"}`}
        >
          Speedy Searching
        </li>
        <li
          onClick={() => handleClick(2)}
          className={`transition-colors duration-150 hover:text-soft-red ${feature == 2 && "border-b-4 border-soft-red font-medium text-dark-blue"}`}
        >
          Easy Sharing
        </li>
      </ul>

      <FeatureTab feature={feature}></FeatureTab>
    </section>
  );
};

export default Features;
