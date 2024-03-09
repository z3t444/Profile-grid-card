import ZetAsset from "../asset/zetAsset.jpg";
import StarIcons from "../asset/Star.svg";
import LoveIcons from "../asset/Love.svg";

function Profile() {
  return (
    <>
      {/* Card Profile */}
      <div className="max-w-sm rounded-2xl bg-[#171717] overflow-hidden shadow-lg">
        <img src={ZetAsset} alt="" width={400} />
        <div className="px-6 mt-5">
          <div className="font-semibold text-gray-300 text-xl">Afkar Mitsal</div>
          <p className="text-gray-400 font-normal text-[13px]">Aku adalah seorang Frontend Web Developer</p>
        </div>
        <div>
          <p className="text-[12px] px-5 text-gray-500 mt-5">Rate 4.00</p>
          <div className="rate flex px-5 mt-2 items-center gap-1">
            {/* star Icons */}
            <img src={StarIcons} alt="star icons" />
            <img src={StarIcons} alt="star icons" />
            <img src={StarIcons} alt="star icons" />
            <img src={StarIcons} alt="star icons" />
          </div>
        </div>
        <div className="px-6 mt-8 pb-7 flex gap-3 items-center">
          {/* button and Star Icons */}
          <button className="w-80 hover:scale-95 duration-300 bg-gradient-to-r from-[#ffbb20] to-[#ff8c90] py-2  rounded-full">
            <a className="text-[12px] text-gray-50" href="">
              Here Now
            </a>
          </button>
          <div className="loveIcons p-2 bg-gray-800 rounded-full">
            <img src={LoveIcons} alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
