import Asset from "../components/RunningProject/asset/Masterpiece.png";

function RunningProject() {
  return (
    <>
      <div className="max-w-sm overflow-hidden rounded-2xl mt-6 bg-[#171717]">
        <img src={Asset} alt="" />
        <div className="px-6 py-5">
          <h3 className="text-xl text-gray-200">Masterpiece Design</h3>
          <h3 className="text-sm mt-1 text-gray-400">Whatever UIKit</h3>
          <p className="mt-10 text-gray-300 mb-4">My team and I are designing a UIKit program from us under the startup name <span className="text-gray-100 font-medium">Whatever UIKit</span>. and are now in the process of creating a Website Index Landing Page.</p>
          <button className="button-to-github hover:scale-95 duration-300 mt-5 mb-4 w-full py-3 rounded-full bg-gradient-to-br from-yellow-400 to-red-500">
            <a className="text-gray-200 font-normal" href="https://github.com/z3t444/masterpiece-design-forking">See in GitHub Repository</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default RunningProject;
