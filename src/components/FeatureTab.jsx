import { features } from "../constants";

const FeatureTab = ({ feature }) => {
  return (
    <div className="mt-5 grid w-full place-items-center gap-10 md:gap-14 lg:mr-auto lg:flex lg:max-w-[102em] xl:gap-36 ">
      <div className="relative grid w-full place-items-center">
        <img
          className="z-10 h-full w-[90%] max-w-[600px] object-cover pb-12 lg:max-w-[700px] lg:place-self-end"
          src={features[feature].img}
          alt=""
        />
        <div className="absolute bottom-0 left-0 h-[85%] w-[80%] rounded-r-full bg-soft-blue md:w-[70%] lg:-bottom-14 lg:h-[90%] lg:w-[90%]"></div>
      </div>

      <div className="w-[90%] max-w-[35em] text-center lg:text-left">
        <p className="mb-3 text-[1.4rem] font-semibold leading-10 text-dark-blue sm:mb-5 sm:text-[1.8rem] md:text-[2.4rem]">
          {features[feature].label}
        </p>
        <p className="mb-9 leading-7 text-grayish-blue sm:text-[1.2rem] sm:leading-8 md:text-[1.35rem] md:leading-10">
          {features[feature].info}
        </p>

        <button className=" rounded-md bg-soft-blue px-6 py-3 text-white shadow-lg lg:place-self-start">
          More Info
        </button>
      </div>
    </div>
  );
};

export default FeatureTab;
