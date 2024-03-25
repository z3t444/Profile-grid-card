function Framework() {
  return (
    <>
      <div className="max-w-sm px-5 mt-5 bg-[#171717] rounded-2xl py-9">
        <marquee direction="">
          <div className="flex items-center gap-10">
            <img src={CSS} alt="" />
            <img src={HTML} alt="" />
            <img src={JS} alt="" />
            <img src={NEST} alt="" />
            <img src={NUXT} alt="" />
            <img src={PUG} alt="" />
            <img src={REACT} alt="" />
            <img src={SASS} alt="" />
          </div>
        </marquee>
      </div>
    </>
  );
}

export default Framework;

import CSS from "../components/Framework/asset/Css.svg";
import HTML from "../components/Framework/asset/Html.svg";
import JS from "../components/Framework/asset/Javascript.svg";
import NEST from "../components/Framework/asset/Nest.svg";
import NUXT from "../components/Framework/asset/Nuxt.svg";
import PUG from "../components/Framework/asset/Pug.svg";
import REACT from "../components/Framework/asset/React.svg";
import SASS from "../components/Framework/asset/Sass.svg";
