function CookiesCard() {
  return (
    <>
      <div className="max-w-sm px-5 mt-5 bg-[#171717] rounded-2xl py-9">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-gray-200 font-medium">we use Cookies</h3>
          </div>
          <div className="flex items-center gap-3">
            <button className="hover:scale-95 duration-300">
              <a className="text-yellow-400 text-sm" href="/">
                Learn More
              </a>
            </button>
            <h3 className="text-gray-400 text-sm">Close</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CookiesCard;
