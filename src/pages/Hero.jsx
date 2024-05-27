import { hero } from "../constants/imports";

const Hero = () => {
  return (
    <section className="w-full pt-10 py-20 flex flex-col items-center gap-10 sm:gap-16">
      <div className="flex-1 w-full grid place-items-center relative">
        <img className="z-10" src={hero} alt="" />
        <div className="w-[80%] h-[80%] bg-soft-blue absolute bottom-0 right-0 rounded-l-full"></div>
      </div>

      <div className="w-[90%] max-w-[35em] text-center">
        <p className="font-semibold text-[1.8rem] leading-10 text-dark-blue sm:text-[3rem] sm:leading-[1.2em]">
          A Simple Bookmark Manager
        </p>
        <p className="my-6 text-grayish-blue leading-7 sm:text-[1.25rem] sm:leading-9">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="mt-10 flex gap-3 items-center font-medium text-[0.85rem] sm:text-[1rem] sm:gap-5">
          <button className="py-3 bg-soft-blue text-white flex-1 border-2 rounded-md shadow-lg hover:bg-white hover:border-soft-blue hover:text-soft-blue transition-all duration-300 sm:py-5">
            Get it on Chrome
          </button>
          <button className="py-3 bg-grayish-blue/20 text-dark-blue flex-1 border-2 rounded-md shadow-lg hover:bg-white hover:border-dark-blue hover:text-dark-blue transition-all duration-300 sm:py-5">
            Get it on Firefox
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
