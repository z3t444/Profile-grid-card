import Insta from "../components/SocialMediaCard/asset/Instagram.svg";
import YouTube from "../components/SocialMediaCard/asset/Youtube.svg";
import LinkedIn from "../components/SocialMediaCard/asset/Linkedin.svg";

function SocialMediaCard() {
  return (
    <>
      <div className="max-w-sm rounded-2xl px-6 py-7 mt-6 bg-[#171717]">
        <div className="text-center">
          <h3 className=" text-gray-200 text-lg font-medium">My Social Media Account</h3>
          <p className="text-[12px] mt-2 text-gray-400">dont forget to follow, like and Subscribe</p>
        </div>
        <div className="flex mt-6 items-center justify-center gap-7">
          <div>
            <a href="">
              <img className="p-3 hover:scale-95 duration-300 rounded-xl bg-blue-400" src={Insta} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img className="p-3 hover:scale-95 duration-300 rounded-xl bg-red-500" src={YouTube} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img className="p-3 hover:scale-95 duration-300 rounded-xl bg-sky-400" src={LinkedIn} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialMediaCard;
