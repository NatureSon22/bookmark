import { facebook, footer, twitter } from "../constants/imports";

const Footer = () => {
  return (
    <footer className="grid w-full place-items-center bg-dark-blue py-12 text-white">
      <div className="flex w-min flex-col items-center gap-12 md:w-full md:max-w-[85em] md:flex-row md:justify-between md:px-5 lg:max-w-[90em]">
        <div className="flex items-center gap-4 text-white">
          <div className="size-[30px] rounded-full">
            <img
              className="h-full w-full rounded-full bg-white object-cover"
              src={footer}
              alt=""
            />
          </div>
          <p className="font-medium uppercase sm:text-[1.2rem]">bookmark</p>
        </div>

        <nav className="sm:ml-5 sm:mr-auto">
          <ul className="flex flex-col gap-5 text-center uppercase tracking-widest sm:flex-row sm:gap-10">
            <li className="cursor-pointer">features</li>
            <li className="cursor-pointer">pricing</li>
            <li className="cursor-pointer">contact</li>
          </ul>
        </nav>

        <div className="flex w-fit gap-14">
          <img src={facebook} alt="facebook icon" />
          <img src={twitter} alt="twitter icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
