function TweetCard() {
  return (
    <>
      <div className="max-w-sm rounded-2xl mt-5 px-6 py-5 bg-[#171717]">
        <div className="flex items-center gap-4 justify-between">
          <input className="bg-transparent w-72 border border-gray-500 p-4 rounded-xl text-sm" type="text" placeholder="What's Happening?" />
          <button className="hover:scale-95 duration-300">
          <a className="text-yellow-400" href="/">Tweet</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default TweetCard;
