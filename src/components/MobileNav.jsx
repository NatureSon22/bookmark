import { close, facebook, mobileBookMark, twitter } from "../constants/imports";

const MobileNav = ({ openNav, setOpenNav }) => {
  const handleClick = () => {
    setOpenNav(false);
  };

  return (
    <div
      className={`w-full h-screen px-8 py-10 bg-dark-blue/95 flex flex-col fixed top-0 left-0 z-20 transition-transform duration-500 transform ${openNav ? "-translate-x-0" : "translate-x-full"}`}
    >
      <div className="mb-10 flex justify-between items-center">
        <img
          className="w-[10em] brightness-0 invert cursor-pointer"
          src={mobileBookMark}
          alt="Mobile Bookmark"
        />
        <img
          className={`cursor-pointer transition-transform duration-500 transform ${openNav ? "rotate-180" : "rotate-0"}`}
          src={close}
          alt="Close Icon"
          onClick={handleClick}
        />
      </div>

      <nav className="w-full self-center">
        <ul className="text-white text-center uppercase border-t-2 border-grayish-blue/20 tracking-widest">
          <li className="cursor-pointer">
            <p className="py-4">Features</p>
          </li>
          <li className="cursor-pointer">
            <p className="py-4">Pricing</p>
          </li>
          <li className="cursor-pointer">
            <p className="py-4">Contact</p>
          </li>
          <li className="w-full pt-5 cursor-pointer">
            <p className="w-full py-2 border border-white rounded-md">Login</p>
          </li>
        </ul>
      </nav>

      <div className="w-fit mt-auto self-center flex gap-14">
        <img className="cursor-pointer" src={facebook} alt="Facebook Icon" />
        <img className="cursor-pointer" src={twitter} alt="Twitter Icon" />
      </div>
    </div>
  );
};

export default MobileNav;
