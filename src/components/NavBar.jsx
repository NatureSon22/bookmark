import { iconHamburger, logoBookMark } from "../constants/imports";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-7 py-10">
      <img src={logoBookMark} alt="logo bookmark" />
      <img
        className="cursor-pointer"
        src={iconHamburger}
        alt="hamburger icon"
      />
    </nav>
  );
};

export default NavBar;
