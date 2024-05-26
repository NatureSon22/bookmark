import { error } from "../constants/imports";

const Contact = () => {
  return (
    <section className="w-full mt-10 pt-20 pb-14 bg-soft-blue grid place-items-center gap-2">
      <div className="w-[85%] text-center">
        <div className="text-white pb-10">
          <p className="pb-3 uppercase tracking-[2px]">
            35,000 + already joined
          </p>
          <p className="text-[1.5rem] font-medium tracking-[2px] leading-[1.4em]">
            Stay up-to-date with what we&apos;re doing
          </p>
        </div>

        <div className="grid gap-5">
          <div className="bg-white px-5 py-4  flex items-center rounded-md">
            <input
              className="flex-1 focus:outline-none active:outline-none"
              placeholder="Enter your email address"
              type="email"
            />
            <div>
              <img src={error} alt="" />
            </div>
          </div>

          <button className="py-4 bg-soft-red text-white rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
