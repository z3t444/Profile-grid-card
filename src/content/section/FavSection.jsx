function FavSection() {
  return (
    <>
      <div className="favCard mt-5 px-5 py-5 overflow-hidden max-w-sm rounded-2xl bg-[#171717]">
        <img src="" alt="" />
        <div className="desk-statistic">
          <p className="text-lg text-gray-200">
            <span className="text-yellow-400">Sound System</span> Loving Subwoofer
          </p>
          <div className="flex mt-3 text-gray-500 gap-5 text-sm items-center">
            <p>Like 1k</p>
            <p>Comment 223</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-8 justify-between">
          <input className="bg-transparent w-72 border border-gray-500 p-4 rounded-xl text-sm" type="text" placeholder="What's Happening?" />
          <button className="hover:scale-95 duration-300">
          <a className="text-yellow-400" href="/">Tweet</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default FavSection;
