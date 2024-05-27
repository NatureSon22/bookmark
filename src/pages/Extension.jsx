import ExtensionCard from "../components/ExtensionCard";
import { extensions } from "../constants";

const Extension = () => {
  return (
    <section className="py-20 grid place-items-center gap-2 sm:gap-10">
      <div className="w-[90%] text-center">
        <p className="font-semibold text-[1.6rem] leading-10 text-dark-blue sm:text-[2rem] sm:mb-5">
          Download the extension
        </p>
        <p className="max-w-[35em] mt-3 mb-7 text-grayish-blue leading-7 sm:text-[1.15rem] sm:leading-8">
          We&apos;ve got more browsers in the pipeline. Please do let us know if
          you&apos;ve got a favourite you&apos;d like us to prioritize.
        </p>
      </div>

      <div className="w-[75%] grid place-items-center grid-cols-1 gap-10 sm:grid-cols-2 sm:w-[90%]">
        {extensions.map((extension, index) => (
          <ExtensionCard
            key={extension.id}
            {...extension}
            index={index}
          ></ExtensionCard>
        ))}
      </div>
    </section>
  );
};

export default Extension;
