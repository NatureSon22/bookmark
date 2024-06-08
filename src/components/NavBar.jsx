import { iconHamburger, logoBookMark } from "../constants/imports";

const NavBar = ({ openNav, setOpenNav }) => {
  const handleClick = () => {
    setOpenNav(!openNav); // Toggles the openNav state
  };

  return (
    <nav className="flex items-center justify-between px-7 py-10 md:mx-auto md:w-full md:max-w-[95em]">
      <img src={logoBookMark} alt="logo bookmark" />

      <ul className="hidden items-center gap-7 uppercase sm:flex md:gap-10 lg:gap-16">
        <li className="cursor-pointer transition-colors duration-150 hover:text-soft-red">
          Features
        </li>
        <li className="cursor-pointer transition-colors duration-150 hover:text-soft-red">
          Pricing
        </li>
        <li className="cursor-pointer transition-colors duration-150 hover:text-soft-red">
          Contact
        </li>
        <li className="cursor-pointer rounded-md border-2 border-soft-red bg-soft-red px-7 py-3 text-white shadow-lg transition-colors duration-150 hover:bg-white hover:text-soft-red">
          Login
        </li>
      </ul>

      <img
        className={`transform cursor-pointer transition-transform duration-300 sm:hidden ${openNav ? "rotate-90" : "rotate-0"}`}
        src={iconHamburger}
        alt="hamburger icon"
        onClick={handleClick}
      />
    </nav>
  );
};

export default NavBar;
