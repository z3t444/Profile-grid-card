import ZetAsset from "../asset/zetAsset.jpg";

function SocialCard() {
  return (
    <>
      <div className="max-w-sm rounded-2xl mt-5 bg-[#171717] overflow-hidden shadow-lg">
        <div className="flex px-5 py-10 items-center gap-3">
          <img src={ZetAsset} width={50} className="rounded-full" alt="" />
          <div className="grid">
            <span className="text-gray-100 font-medium">Afkar Ezi</span>
            <span className="text-sm text-gray-400 mt-1">@z3t444</span>
          </div>
        </div>
        <div className="flex gap-4 justify-around items-center">
          <div className="grid">
            <span className="text-gray-400 font-medium">Post</span>
            <span className="text-gray-300 text-lg mt-1">5</span>
          </div>
          <div className="grid">
            <span className="text-gray-400 font-medium">Followers</span>
            <span className="text-gray-300 text-lg mt-1">352</span>
          </div>
          <div className="grid">
            <span className="text-gray-400 font-medium">Following</span>
            <span className="text-gray-300 text-lg mt-1">197</span>
          </div>
        </div>
        <div className="box-icons">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default SocialCard;
