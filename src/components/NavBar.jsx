import { iconHamburger, logoBookMark } from "../constants/imports";

const NavBar = ({ openNav, setOpenNav }) => {
  const handleClick = () => {
    setOpenNav(true);
  };

  return (
    <nav className="flex justify-between items-center px-7 py-10">
      <img src={logoBookMark} alt="logo bookmark" />
      <img
        className={`cursor-pointer transition-transform duration-300 transform ${openNav ? "rotate-180" : "rotate-0"}`}
        src={iconHamburger}
        alt="hamburger icon"
        onClick={() => handleClick()}
      />
    </nav>
  );
};

export default NavBar;
