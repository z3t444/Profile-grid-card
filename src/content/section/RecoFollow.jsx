import MenuVertical from "../components/RecoFollow/asset/MenuVertical.svg";
import ZetAsset from "../asset/zetAsset.jpg";

function RecoFollow() {
  return (
    <>
      <div className="max-w-sm rounded-2xl px-6 py-4 mt-5 bg-[#171717]">
        {/* heading RecoFollow */}
        <div className="flex items-center justify-between">
          <p className="text-gray-200">Who to Follow</p>
          <img className="rotate-90" src={MenuVertical} alt="" />
        </div>

        {/* for acc recomended */}
        <div className="mt-8">
          <div className="flex items-center justify-between ">
            {/* Profile 1 */}
            <div className="flex items-center gap-3">
              <img src={ZetAsset} width={50} className="rounded-full" alt="" />
              <div className="grid text-sm">
                <p className="text-gray-200">Dzaky Abdurrahman</p>
                <p className="text-gray-500 text-[12px]">@dzakyabdurhmn</p>
              </div>
            </div>
            <div>
              <button className="px-4 hover:scale-95 duration-300 rounded-full bg-gradient-to-r from-[#f981c3] to-[#8d5af0]">
                <a className="text-sm text-gray-200" href="https://www.instagram.com/dzakyabdurhmn">
                  Follow
                </a>
              </button>
            </div>
          </div>
          <div className="flex items-center mt-7 justify-between ">
            {/* Profile 2 */}
            <div className="flex items-center gap-3">
              <img src={ZetAsset} width={50} className="rounded-full" alt="" />
              <div className="grid text-sm">
                <p className="text-gray-200">Renjana Putri</p>
                <p className="text-gray-500 text-[12px]">@rnj.vnxmfl</p>
              </div>
            </div>
            <div>
              <button className="px-4 hover:scale-95 duration-300 rounded-full bg-gradient-to-r from-[#f981c3] to-[#8d5af0]">
                <a className="text-sm text-gray-200" href="https://www.instagram.com/rnj.vnxmfl">
                  Follow
                </a>
              </button>
            </div>
          </div>
          <div className="flex items-center mt-7 mb-5 justify-between ">
            {/* Profile 3 */}
            <div className="flex items-center gap-3">
              <img src={ZetAsset} width={50} className="rounded-full" alt="" />
              <div className="grid text-sm">
                <p className="text-gray-200">Rafael Destiano</p>
                <p className="text-gray-500 text-[12px]">@rafdmrs</p>
              </div>
            </div>
            <div>
              <button className="px-4 hover:scale-95 duration-300 rounded-full bg-gradient-to-r from-[#f981c3] to-[#8d5af0]">
                <a className="text-sm text-gray-200" href="https://www.instagram.com/rafdmrs">
                  Follow
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecoFollow;
