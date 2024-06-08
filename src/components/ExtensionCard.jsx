import classNames from "classnames";
import { decorDot } from "../constants/imports";

const ExtensionCard = ({ name, img, minimumVersion, index }) => {
  // Define the dynamic classes
  const dynamicClasses = classNames(
    "relative grid max-w-fit place-items-center gap-4 rounded-xl border p-6 pt-10 shadow-custom",
    {
      "lg:-bottom-10": index === 1,
      "lg:-bottom-20": index === 2,
      "sm:col-span-2 lg:col-span-1": index === 2,
    },
  );

  return (
    <div className={dynamicClasses}>
      <img src={img} alt={name} />
      <div className="my-3 text-center">
        <p className="mb-2 text-[1.2rem] font-semibold text-dark-blue">
          Add to {name}
        </p>
        <p className="text-[0.9rem]">Minimum version {minimumVersion}</p>
      </div>
      <img className="mb-2" src={decorDot} alt="" />
      <button className="w-full cursor-pointer rounded-md border-2 border-soft-blue bg-soft-blue py-4 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:border-soft-blue hover:bg-white hover:text-soft-blue">
        Add & Install Extension
      </button>
    </div>
  );
};

export default ExtensionCard;
