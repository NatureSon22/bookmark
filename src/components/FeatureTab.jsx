import { features } from "../constants";

const FeatureTab = ({ feature }) => {
  return (
    <div className="w-full mt-5 grid place-items-center gap-10">
      <div className="w-full grid place-items-center relative">
        <img
          className="pb-12 w-[90%] max-w-[600px] z-10"
          src={features[feature].img}
          alt=""
        />
        <div className="w-[80%] h-[85%] bg-soft-blue absolute left-0 bottom-0 rounded-r-full"></div>
      </div>

      <div className="w-[90%] max-w-[35em] text-center">
        <p className="font-semibold mb-3 text-[1.4rem] leading-10 text-dark-blue sm:text-[1.8rem] sm:mb-5">
          {features[feature].label}
        </p>
        <p className=" text-grayish-blue leading-7 sm:text-[1.2rem] sm:leading-8">
          {features[feature].info}
        </p>
      </div>

      <button className=" px-6 py-3 bg-soft-blue rounded-md text-white shadow-lg">
        More Info
      </button>
    </div>
  );
};

export default FeatureTab;
