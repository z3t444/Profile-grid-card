import Asset from "../components/SprintForkActifity/asset/unnamed.png";

function SprintFork() {
  return (
    <>
      <div className="border-2xl py-7 bg-gradient-to-r mt-5 rounded-xl from-[#ffb132] to-[#fb8c9d]">
        <div className="flex items-center gap-5 justify-center">
          {/* desk */}
          <div className="grid">
            <h3 className="text-gray-200 font-medium">Forking Activity</h3>
            <p className="text-gray-300 text-sm">anytime Project</p>
          </div>
          {/* asset image picture */}
          <div className="flex items-center gap-3 justify-center">
            <img src={Asset} className="rounded-full" width={50} alt="" />
            <img src={Asset} className="rounded-full" width={50} alt="" />
            <img src={Asset} className="rounded-full" width={50} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SprintFork;
