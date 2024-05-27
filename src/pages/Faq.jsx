import { useState } from "react";
import { faqs } from "../constants";
import { arrow } from "../constants/imports";

const Faq = () => {
  const [faqIndex, setFaqIndex] = useState(null);

  const handleClick = (event, id) => {
    event.preventDefault(); // Prevent the default toggle behavior
    setFaqIndex(faqIndex === id ? null : id); // Toggle the clicked FAQ
  };

  return (
    <section className="w-full py-20 grid place-items-center gap-2">
      <div className="w-[90%] max-w-[40em] grid place-items-center">
        <div className="text-center grid place-items-center">
          <p className="font-semibold text-[1.6rem] leading-9 text-dark-blue sm:text-[2rem] sm:mb-5">
            Frequently Asked Questions
          </p>
          <p className="max-w-[35em] mt-3 mb-7 text-grayish-blue leading-7 sm:text-[1.15rem] sm:leading-8 sm:mb-10">
            Here are some of our FAQs. If you have any other questions you&apos;d
            like answered, please feel free to email us.
          </p>
        </div>

        <div className="w-full">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="pt-7 pb-5 border-b-2 sm:pb-7"
              open={faqIndex === faq.id}
            >
              <summary
                className="text-dark-blue font-[500] list-none flex justify-between items-center gap-5 transition-all duration-300 cursor-pointer group"
                onClick={(event) => handleClick(event, faq.id)}
              >
                <p className="sm:text-[1.2rem] group-hover:text-soft-red">
                  {faq.question}
                </p>
                <img
                  className={`sm:mr-5 transform transition-transform duration-300 ${faqIndex === faq.id ? "rotate-180" : ""}`}
                  src={arrow}
                  alt="Arrow"
                />
              </summary>
              <p className="w-fit pt-8 text-dark-blue leading-8 sm:text-[1.1rem] sm:pt-10">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <button className="px-7 py-3 mt-10 text-sm bg-soft-blue text-white flex-1 rounded-md sm:mt-16">
          More Info
        </button>
      </div>
    </section>
  );
};

export default Faq;
