import { hero } from "../constants/imports";

const Hero = () => {
  return (
    <section className="flex w-full flex-col items-center gap-10 py-20 pt-10 sm:gap-16 lg:ml-auto lg:max-w-[105em] lg:pt-20 xl:flex-row-reverse">
      <div className="relative grid w-full flex-1 place-items-center">
        <img className="z-10 2xl:scale-110" src={hero} alt="" />
        <div className="absolute bottom-0 right-0 h-[80%] w-[80%] rounded-l-full bg-soft-blue lg:w-[65%] xl:-bottom-10"></div>
      </div>

      <div className="w-[90%] max-w-[35em] text-center lg:text-left xl:ml-10 2xl:ml-0">
        <p className="text-[1.8rem] font-semibold leading-10 text-dark-blue sm:text-[3.5rem] sm:leading-[1.2em]">
          A Simple Bookmark Manager
        </p>
        <p className="my-6 leading-7 text-grayish-blue sm:text-[1.3rem] sm:leading-9">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="mt-10 flex items-center gap-3 text-[0.85rem] font-medium sm:gap-5 sm:text-[1rem]">
          <button className="flex-1 rounded-md border-2 bg-soft-blue py-3 text-white shadow-lg transition-all duration-300 hover:border-soft-blue hover:bg-white hover:text-soft-blue sm:py-5 xl:max-w-fit lg:px-8">
            Get it on Chrome
          </button>
          <button className="flex-1 rounded-md border-2 bg-grayish-blue/20 py-3 text-dark-blue shadow-lg transition-all duration-300 hover:border-dark-blue hover:bg-white hover:text-dark-blue sm:py-5 xl:max-w-fit lg:px-8">
            Get it on Firefox
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
