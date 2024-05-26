import { faqs } from "../constants";
import { arrow } from "../constants/imports";

const Faq = () => {
  return (
    <section className="py-20 grid place-items-center gap-2">
      <div className="w-[90%] text-center">
        <p className="font-semibold text-[1.6rem] leading-9 text-dark-blue">
          Frequently Asked Questions
        </p>
        <p className="mt-3 mb-7 text-grayish-blue leading-7">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>

      <div className="w-[85%]">
        {faqs.map((faq) => (
          <details key={faq.id} className="pt-7 pb-5 border-b-2">
            <summary className="text-dark-blue font-[500] list-none flex justify-between items-center">
              <p>{faq.question}</p>
              <img className="" src={arrow} alt="" />
            </summary>
            <p className="pt-8 text-dark-blue leading-8">{faq.answer}</p>
          </details>
        ))}
      </div>

      <button className="px-7 py-3 mt-10 text-sm bg-soft-blue text-white flex-1 rounded-md">
        More Info
      </button>
    </section>
  );
};

export default Faq;
