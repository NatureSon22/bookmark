import { facebook, footer, twitter } from "../constants/imports";

const Footer = () => {
  return (
    <footer className="w-full py-12 text-white bg-dark-blue grid place-items-center">
      <div className="w-min flex flex-col items-center gap-12">
        <div className="text-white flex items-center gap-4">
          <div className="rounded-full size-[30px]">
            <img
              className="w-full h-full bg-white rounded-full object-cover"
              src={footer}
              alt=""
            />
          </div>
          <p className="uppercase">bookmark</p>
        </div>

        <nav>
          <ul className="text-center uppercase tracking-widest flex flex-col gap-5">
            <li>features</li>
            <li>pricing</li>
            <li>contact</li>
          </ul>
        </nav>

        <div className="w-fit flex gap-14">
          <img src={facebook} alt="facebook icon" />
          <img src={twitter} alt="twitter icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
