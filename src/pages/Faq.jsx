import { useState } from "react";
import { faqs } from "../constants";
import { arrow } from "../constants/imports";

const Faq = () => {
  const [faqIndex, setFaqIndex] = useState(null);

  const handleClick = (event, id) => {
    event.preventDefault(); // Prevent the default toggle behavior
    setFaqIndex(faqIndex === id ? null : id);
  };

  return (
    <section className="grid w-full place-items-center gap-2 py-20 lg:py-32">
      <div className="grid w-[90%] max-w-[40em] place-items-center">
        <div className="grid place-items-center text-center">
          <p className="text-[1.6rem] font-semibold leading-9 text-dark-blue sm:mb-5 sm:text-[2rem]">
            Frequently Asked Questions
          </p>
          <p className="mb-7 mt-3 max-w-[35em] leading-7 text-grayish-blue sm:mb-10 sm:text-[1.15rem] sm:leading-8">
            Here are some of our FAQs. If you have any other questions
            you&apos;d like answered, please feel free to email us.
          </p>
        </div>

        <div className="w-full">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="border-b-2 pb-5 pt-7 sm:pb-7"
              open={faqIndex === faq.id}
            >
              <summary
                className="group flex cursor-pointer list-none items-center justify-between gap-5 font-[500] text-dark-blue transition-all duration-300"
                onClick={(event) => handleClick(event, faq.id)}
              >
                <p className="group-hover:text-soft-red sm:text-[1.2rem]">
                  {faq.question}
                </p>
                <img
                  className={`transform transition-transform duration-300 sm:mr-5 ${faqIndex === faq.id ? "rotate-180" : ""}`}
                  src={arrow}
                  alt="Arrow"
                />
              </summary>
              <p className="w-fit pt-8 leading-8 text-dark-blue sm:pt-10 sm:text-[1.1rem]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <button className="mt-10 flex-1 rounded-md bg-soft-blue px-7 py-3 text-sm text-white sm:mt-16">
          More Info
        </button>
      </div>
    </section>
  );
};

export default Faq;
