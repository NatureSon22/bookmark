import { useState } from "react";
import FeatureTab from "../components/FeatureTab";

const Features = () => {
  const [feature, setFeature] = useState(0);

  const handleClick = (index) => {
    setFeature(index);
  };

  return (
    <section className="w-full py-20 grid place-items-center">
      <div className="w-[90%] max-w-[35em] text-center">
        <p className="font-semibold mb-3 text-[1.6rem] leading-10 text-dark-blue sm:text-[2rem] sm:mb-5">
          Features
        </p>
        <p className="text-grayish-blue leading-7 sm:text-[1.15rem] sm:leading-8">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <ul className="w-[80%] my-10 text-center text-grayish-blue *:py-5 *:cursor-pointer border-y-[1px] sm:flex *:flex-1 sm:my-12 sm:border-t-0">
        <li
          onClick={() => handleClick(0)}
          className={`transition-colors duration-150 hover:text-soft-red  ${feature == 0 && "text-dark-blue border-b-4 border-soft-red"}`}
        >
          Simple Bookmarking
        </li>
        <li
          onClick={() => handleClick(1)}
          className={`transition-colors duration-150 hover:text-soft-red border-y-[1px] sm:border-t-0  ${feature == 1 && "text-dark-blue border-b-4  border-b-soft-red"}`}
        >
          Speedy Searching
        </li>
        <li
          onClick={() => handleClick(2)}
          className={`transition-colors duration-150 hover:text-soft-red ${feature == 2 && "text-dark-blue border-b-4 border-soft-red"}`}
        >
          Easy Sharing
        </li>
      </ul>

      <FeatureTab feature={feature}></FeatureTab>
    </section>
  );
};

export default Features;
