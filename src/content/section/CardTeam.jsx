import ZetAsset from "../components/CardTeam1/asset/zetAsset.jpg";

function CardTeam() {
  return (
    <>
      <div className="max-w-sm px-5 py-5 bg-[#171717] mt-5 rounded-2xl">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-200">My team</p>
          <p className="text-sm text-gray-200 font-medium">whatever</p>
        </div>
        <div className="flex items-center justify-around mb-3 mt-7">
          <div className="px-5 py-5 bg-gradient-to-br xl:w-36 from-[#86ffb6] to-[#547dea] rounded-2xl">
            <div className="flex justify-center">
              <img src={ZetAsset} alt="" className="rounded-full" width={70} />
            </div>
            <ul className="for-desk-profile font-medium text-gray-200 text-start mt-12 text-[12px]">
              <h3>Rafael Destiano</h3>
              <p>UI UX Designer</p>
            </ul>
          </div>
          <div>
            <div className="px-5 py-5 bg-gradient-to-br from-[#ff5755] to-[#fa7d6b] rounded-2xl">
              <div className="flex justify-center">
                <img src={ZetAsset} alt="" className="rounded-full" width={70} />
              </div>
              <ul className="for-desk-profile font-medium text-gray-200 text-start mt-12 text-[12px]">
                <h3>Dzaky Abdrahman</h3>
                <p>Backend Dev</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardTeam;
