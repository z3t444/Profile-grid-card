import ColorFull from "../../content/components/Community/asset/colorfull.jpg";

function CommunityCard() {
  return (
    <>
      <div className="max-w-sm bg-[#171717] mt-5 overflow-hidden rounded-2xl">
        <div>
          {/* asset Picture */}
          <img src={ColorFull} alt=".." width={390} />
          <div className="for-desk px-5 py-4">
            {/* desk */}
            <p className="uppercase text-[11px] text-yellow-400 opacity-80 mt-3">Community</p>
            <h3 className="text-2xl text-gray-300 mt-1">
              On Building a global <br />
              mindset
            </h3>
            <p className="text-gray-600 text-[13px] max-w-[300px] mb-5 mt-4 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eius molestiae laudantium labore atque praesentium sunt, nobis deserunt a ipsam dicta illo error unde illum natus quam. Officiis, fuga deserunt.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunityCard;
