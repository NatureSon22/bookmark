import FeatureTab from "../components/FeatureTab";

const Features = () => {
  return (
    <section className="py-20 grid place-items-center">
      <div className="w-[90%] text-center">
        <p className="font-semibold mb-3 text-[1.6rem] leading-10 text-dark-blue">
          Features
        </p>
        <p className="text-grayish-blue leading-7">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <ul className="w-[80%] my-10 text-center text-dark-blue *:py-5 *:cursor-pointer border-y-[1px]">
        <li>Simple Bookmarking</li>
        <li className="border-y-[1px]">Speedy Searching</li>
        <li>Easy Sharing</li>
      </ul>

      <FeatureTab></FeatureTab>
    </section>
  );
};

export default Features;
