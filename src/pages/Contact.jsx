import { useState } from "react";
import { error } from "../constants/imports";

const Contact = () => {
  const emailRegex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(\\.[!#-'*+/-9=?A-Z^-~-]+)*|\"(\\[\\]!#-[^-~ \\t]|(\\\\[\\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\\.[!#-'*+/-9=?A-Z^-~-]+)*|\\[[\\t -Z^-~]*])",
  );

  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setIsError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setEmail("Whoops, make sure it's an email");
      setIsError(true);

      setTimeout(() => {
        setEmail("");
        setIsError(false);
      }, 2000);
    }
  };

  return (
    <section className="mt-10 grid w-full place-items-center gap-2 bg-soft-blue pb-14 pt-20 md:pb-20 md:pt-24">
      <div className="w-[85%] text-center md:max-w-[35em]">
        <div className="pb-10 text-white">
          <p className="pb-3 uppercase tracking-[2px]">
            35,000+ already joined
          </p>
          <p className="text-[1.5rem] font-medium leading-[1.4em] tracking-[2px] sm:pt-10 sm:text-[2.5rem] md:text-[3rem]">
            Stay up-to-date with what we&apos;re doing
          </p>
        </div>

        <form
          className="flex flex-col gap-5 sm:mt-2 sm:flex-row"
          onSubmit={handleSubmit}
        >
          <div
            className={`relative flex items-center rounded-md border-2 bg-white px-5 py-4 sm:flex-1 ${
              isError ? "flicker border-red-500" : "border-white"
            }`}
          >
            <input
              className={`flex-1 focus:outline-none ${
                isError && "font-semibold italic text-soft-red"
              }`}
              placeholder="Enter your email address"
              type="text"
              value={email}
              onChange={handleInputChange}
            />
            <div className={`${isError ? "block" : "hidden"} absolute right-4`}>
              <img src={error} alt="Error icon" />
            </div>
          </div>

          <button
            className="rounded-md border-2 border-soft-red bg-soft-red py-4 font-medium text-white transition-colors duration-150 hover:bg-white hover:text-soft-red sm:px-8"
            type="submit"
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
