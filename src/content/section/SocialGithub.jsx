import ZetAsset from "../asset/zetAsset.jpg";
import VerticalMenu from "../components/SocialGithub/asset/MenuVertical.svg";

function SocialGithub() {
  return (
    <>
      <div className="max-w-sm px-6 py-5 bg-[#171717] rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="asset-profile">
              <img src={ZetAsset} width={70} className="rounded-full" alt="" />
            </div>
            <div>
              <p className="text-gray-100">z3t444</p>
              <p className="text-gray-400 text-[12px] mt-1">Frontend Developer</p>
            </div>
          </div>
          <div>
            <img src={VerticalMenu} alt="vertical Menu" />
          </div>
        </div>

        {/* static */}
        <div className="flex mt-10 text-start items-center gap-10">
          <div>
            <p className="text-gray-400">Followers</p>
            <p className="text-gray-100 text-2xl mt-1">8</p>
          </div>
          <div>
            <p className="text-gray-400">Following</p>
            <p className="text-gray-100 text-2xl mt-1">10</p>
          </div>
          <div>
            <p className="text-gray-400">Repository</p>
            <p className="text-gray-100 text-2xl mt-1">30</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialGithub;
