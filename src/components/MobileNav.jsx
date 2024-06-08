import { close, facebook, mobileBookMark, twitter } from "../constants/imports";

const MobileNav = ({ openNav, setOpenNav }) => {
  const handleClick = () => {
    setOpenNav(false);
  };

  return (
    <div
      className={`fixed left-0 top-0 z-20 flex h-screen w-full transform flex-col bg-dark-blue/95 px-8 py-10 transition-transform duration-500 ${openNav ? "-translate-x-0" : "translate-x-full"}`}
    >
      <div className="mb-10 flex items-center justify-between">
        <img
          className="w-[10em] cursor-pointer brightness-0 invert"
          src={mobileBookMark}
          alt="Mobile Bookmark"
        />
        <img
          className={`transform cursor-pointer transition-transform duration-500 ${openNav ? "rotate-180" : "rotate-0"}`}
          src={close}
          alt="Close Icon"
          onClick={handleClick}
        />
      </div>

      <nav className="w-full self-center">
        <ul className="border-t-2 border-grayish-blue/20 text-center uppercase tracking-widest text-white">
          <li className="cursor-pointer">
            <p className="py-4">Features</p>
          </li>
          <li className="cursor-pointer">
            <p className="py-4">Pricing</p>
          </li>
          <li className="cursor-pointer">
            <p className="py-4">Contact</p>
          </li>
          <li className="w-full cursor-pointer pt-5">
            <p className="w-full rounded-md border border-white py-2">Login</p>
          </li>
        </ul>
      </nav>

      <div className="mt-auto flex w-fit gap-14 self-center">
        <img className="cursor-pointer" src={facebook} alt="Facebook Icon" />
        <img className="cursor-pointer" src={twitter} alt="Twitter Icon" />
      </div>
    </div>
  );
};

export default MobileNav;
