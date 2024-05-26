import { decorDot } from "../constants/imports";

const ExtensionCard = ({ name, img, minimumVersion }) => {
  return (
    <div className="max-w-fit p-6 pt-10 shadow-custom grid place-items-center gap-4 rounded-xl">
      <img src={img} alt={name} />
      <div className="text-center my-3">
        <p className="font-semibold text-dark-blue text-[1.2rem] mb-2">
          Add to {name}
        </p>
        <p className="text-[0.9rem]">Minimum version {minimumVersion}</p>
      </div>
      <img className="mb-2" src={decorDot} alt="" />
      <button className="w-full py-4 text-white text-sm bg-soft-blue rounded-md shadow-lg cursor-pointer">
        Add & Install Extension
      </button>
    </div>
  );
};

export default ExtensionCard;
