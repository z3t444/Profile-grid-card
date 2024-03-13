import ZetAsset from "../asset/zetAsset.jpg";
import MenuIcons from "../components/Socialcard/asset/Shape.svg";
import ToggleOff from "../components/Socialcard/asset/ToggleOn.svg";
import MusicIcons from "../components/Socialcard/asset/Music.svg";

function SocialCard() {
  return (
    <>
      <div className="max-w-sm rounded-2xl mt-5 bg-[#171717] overflow-hidden shadow-lg">
        <div className="flex px-5 py-10 items-center gap-3">
          <img src={ZetAsset} width={70} className="rounded-full" alt="" />
          <div className="grid">
            <span className="text-gray-100 font-medium">zzz_3t44</span>
            <span className="text-sm text-gray-400 mt-1">@z3t444</span>
          </div>
        </div>
        <div className="flex gap-4 justify-around items-center">
          <div className="grid">
            <span className="text-gray-400 font-medium">Post</span>
            <span className="text-gray-200 text-xl mt-1">5</span>
          </div>
          <div className="grid">
            <span className="text-gray-400 font-medium">Followers</span>
            <span className="text-gray-200 text-xl mt-1">352</span>
          </div>
          <div className="grid">
            <span className="text-gray-400 font-medium">Following</span>
            <span className="text-gray-200 text-xl mt-1">197</span>
          </div>
        </div>
        <div className="box-icons mt-12 flex items-center mb-10 justify-around px-5">
          <div className="p-7 hover:scale-105 duration-300 rounded-xl bg-gradient-to-r from-[#ffb238] to-[#fe9681]">
            <img src={MenuIcons} width={40} alt=".." />
          </div>
          <div className="p-4 rounded-xl hover:scale-105 duration-300 bg-gradient-to-r from-[#78f8b7] to-[#5587f6]">
            <img src={ToggleOff} alt="" />
          </div>
          <div className="p-5 rounded-xl hover:scale-105 duration-300 bg-gradient-to-r from-[#ff7cc4] to-[#865efd]">
            <img src={MusicIcons} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialCard;
