import Css from "../components/Framework/asset/Css.svg";
import Html from "../components/Framework/asset/Html.svg";
import Javascript from "../components/Framework/asset/Javascript.svg";
import Nest from "../components/Framework/asset/Nest.svg";
import Nuxt from "../components/Framework/asset/Nuxt.svg";
import Pug from "../components/Framework/asset/Pug.svg";
import React from "../components/Framework/asset/React.svg";
import Sass from "../components/Framework/asset/Sass.svg";
import Svelte from "../components/Framework/asset/Svelte.svg";
import Tailwindcss from "../components/Framework/asset/Tailwindcss.svg";
import Vue from "../components/Framework/asset/Vue.svg";

function Framework() {
  return (
    <>
      <div className="max-w-sm rounded-2xl px-6 py-8 mt-5 bg-[#171717]">
        <marquee direction="">
          <div className="flex items-center gap-10">
            <img src={Css} alt="" />
            <img src={Html} alt="" />
            <img src={Javascript} alt="" />
            <img src={Nest} alt="" />
            <img src={Nuxt} alt="" />
            <img src={Pug} alt="" />
            <img src={React} alt="" />
            <img src={Sass} alt="" />
            <img src={Svelte} alt="" />
            <img src={Tailwindcss} alt="" />
            <img src={Vue} alt="" />
          </div>
        </marquee>
      </div>
    </>
  );
}

export default Framework;
