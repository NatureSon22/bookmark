import { features } from "../constants"
import { tab1 } from "../constants/imports"

const FeatureTab = () => {
  return (
    <div className="w-full mt-5 grid place-items-center gap-10">
        <div className="w-full grid place-items-center relative">
          <img className="pb-12 w-[90%] z-10" src={tab1} alt="" />
          <div className="w-[80%] h-[85%] bg-soft-blue absolute left-0 bottom-0 rounded-r-full"></div>
        </div>

        <div className="w-[90%] text-center">
          <p className="font-semibold mb-3 text-[1.4rem] leading-10 text-dark-blue">
            {features[0].label}
          </p>
          <p className=" text-grayish-blue leading-7">{features[0].info}</p>
        </div>
      </div>
  )
}

export default FeatureTab