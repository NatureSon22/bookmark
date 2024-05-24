import { hero } from "../constants/imports";

const Hero = () => {
  return (
    <section className="pt-10 py-20 flex flex-col items-center gap-10">
      <div className="grid place-items-center relative">
        <img className="z-10" src={hero} alt="" />
        <div className="w-[80%] h-[80%] bg-soft-blue absolute bottom-0 right-0 rounded-l-full"></div>
      </div>

      <div className="w-[90%] text-center">
        <h1 className="font-semibold text-[1.8rem] leading-10 text-dark-blue">
          A Simple Bookmark Manager
        </h1>
        <p className="my-6 text-grayish-blue leading-7">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="mt-10 flex gap-3 items-center font-medium text-[0.85rem]">
          <button className="py-3 bg-soft-blue text-white flex-1 rounded-md">
            Get it on Chrome
          </button>
          <button className="py-3 bg-grayish-blue/20 text-dark-blue flex-1 rounded-md">
            Get it on Firefox
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
