import ExtensionCard from "../components/ExtensionCard";
import { extensions } from "../constants";

const Extension = () => {
  return (
    <section className="grid place-items-center gap-2 py-20 sm:gap-10 lg:pb-32">
      <div className="w-[90%] text-center">
        <p className="text-[1.6rem] font-semibold leading-10 text-dark-blue sm:mb-5 sm:text-[2rem]">
          Download the extension
        </p>
        <p className="mx-auto mb-7 mt-3 max-w-[35em] leading-7 text-grayish-blue sm:text-[1.15rem] sm:leading-8">
          We&apos;ve got more browsers in the pipeline. Please do let us know if
          you&apos;ve got a favourite you&apos;d like us to prioritize.
        </p>
      </div>

      <div className="grid w-[75%] grid-cols-1 place-items-center gap-10 sm:w-[90%] sm:grid-cols-2 lg:grid-cols-3">
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
