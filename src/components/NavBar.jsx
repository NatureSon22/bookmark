import { iconHamburger, logoBookMark } from "../constants/imports";

const NavBar = ({ openNav, setOpenNav }) => {
  const handleClick = () => {
    setOpenNav(!openNav); // Toggles the openNav state
  };

  return (
    <nav className="flex justify-between items-center px-7 py-10">
      <img src={logoBookMark} alt="logo bookmark" />

      <ul className="hidden gap-7 items-center uppercase sm:flex">
        <li className="transition-colors duration-150 hover:text-soft-red cursor-pointer">
          Features
        </li>
        <li className="transition-colors duration-150 hover:text-soft-red cursor-pointer">
          Pricing
        </li>
        <li className="transition-colors duration-150 hover:text-soft-red cursor-pointer">
          Contact
        </li>
        <li className="px-7 py-3 text-white border-2 border-soft-red bg-soft-red shadow-lg rounded-md cursor-pointer hover:bg-white transition-colors duration-150 hover:text-soft-red">
          Login
        </li>
      </ul>

      <img
        className={`cursor-pointer transition-transform duration-300 transform sm:hidden ${openNav ? "rotate-90" : "rotate-0"}`}
        src={iconHamburger}
        alt="hamburger icon"
        onClick={handleClick}
      />
    </nav>
  );
};

export default NavBar;
