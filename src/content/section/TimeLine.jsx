import MenuVertical from "../components/TimeLine/asset/MenuVertical.svg";

function TimeLine() {
  return (
    <>
      <div className="max-w-sm rounded-2xl px-6 py-5 mt-5 bg-[#171717]">
        <div className="flex items-center justify-between">
          <div className="grid">
            <h3 className="text-2xl text-gray-200">Today Tasks</h3>
            <p className="text-gray-400 text-sm mt-1">Create Project</p>
          </div>
          <div className="for-asset-menuvertical">
            <img src={MenuVertical} alt="" />
          </div>
        </div>

        {/* for timeline status */}

        {/* timeline 1 */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="for-vertical-line w-1 h-12 rounded-2xl bg-gradient-to-t from-blue-600 to-blue-400"></div>
              <div className="grid">
                <h3 className="text-gray-200">Create New Marketplace</h3>
                <p className="text-gray-400 text-sm mt-1">with HTML, CSS, JS</p>
              </div>
            </div>
            <div>
              <p className="text-gray-200">10.00 AM</p>
            </div>
          </div>

          {/* timeline 2 */}
          <div className="flex items-center mt-10 justify-between">
            <div className="flex items-center gap-3">
              <div className="for-vertical-line w-1 h-12 rounded-2xl bg-gradient-to-t from-purple-600 to-blue-400"></div>
              <div className="grid">
                <h3 className="text-gray-200">Create New Marketplace</h3>
                <p className="text-gray-400 text-sm mt-1">with HTML, CSS, JS</p>
              </div>
            </div>
            <div>
              <p className="text-gray-200">10.00 AM</p>
            </div>
          </div>

          {/* timeline 3 */}
          <div className="flex items-center mt-10 mb-5 justify-between">
            <div className="flex items-center gap-3">
              <div className="for-vertical-line w-1 h-12 rounded-2xl bg-gradient-to-t from-orange-400 to-yellow-400"></div>
              <div className="grid">
                <h3 className="text-gray-200">Create New Marketplace</h3>
                <p className="text-gray-400 text-sm mt-1">with HTML, CSS, JS</p>
              </div>
            </div>
            <div>
              <p className="text-gray-200">10.00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeLine;
