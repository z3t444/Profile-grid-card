import CheckIcons from "../components/SkillCard/Asset/Shape.svg";
import HorizontalMenu from '../components/SkillCard/Asset/MenuVertical.svg'

function SkillCard() {
  return (
    <>
      <div className="max-w-sm rounded-2xl px-6 py-5 mt-6 bg-[#171717]">
        <div className="heading-skill-card flex items-center justify-between">
            <h3 className="text-gray-300 font-semibold">Skill</h3>
            <img className="rotate-90" src={HorizontalMenu} alt="" />
        </div>
        <div className="grid mt-10 gap-12 mb-5">
          <div>
            <img className="p-4 rounded-full bg-gradient-to-br from-[#79ffb8] to-[#4979ec]" src={CheckIcons} alt="" />
          </div>
          <div>
            <img className="p-4 rounded-full bg-gradient-to-br from-[#79ffb8] to-[#4979ec]" src={CheckIcons} alt="" />
          </div>
          <div>
            <img className="p-4 rounded-full bg-gradient-to-br from-[#79ffb8] to-[#4979ec]" src={CheckIcons} alt="" />
          </div>
          <div>
            <img className="p-4 rounded-full bg-gradient-to-br from-[#79ffb8] to-[#4979ec]" src={CheckIcons} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillCard;
