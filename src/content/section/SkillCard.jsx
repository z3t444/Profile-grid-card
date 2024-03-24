import CheckIcons from "../components/SkillCard/Asset/Shape.svg";
import HorizontalMenu from "../components/SkillCard/Asset/MenuVertical.svg";

function SkillCard() {
  return (
    <>
      <div className="max-w-sm rounded-2xl px-6 py-5 mt-6 bg-[#171717]">
        <div className="heading-skill-card flex items-center justify-between">
          <h3 className="text-gray-300 font-semibold">Skill</h3>
          <img className="rotate-90" src={HorizontalMenu} alt="" />
        </div>
        <div className="grid mt-8 gap-8 mb-5">
          <div className="flex items-center gap-3">
            <img className="p-3 rounded-full bg-gradient-to-br from-[#79ffb8] to-[#4979ec]" src={CheckIcons} alt="" />
            <div>
              <p className="text-sm text-gray-300 font-normal">Styling With Neumorpishm Design</p>
              <p className="text-[12px] text-gray-400 mt-1">we create design with a Generate Robot</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img className="p-3 rounded-full bg-gradient-to-br from-[#79ffb8] to-[#4979ec]" src={CheckIcons} alt="" />
            <div>
              <p className="text-sm text-gray-300 font-normal">able to use framework Popular</p>
              <p className="text-[12px] text-gray-400 mt-1">Vue JS, React, Svelte, Solid JS, Vite, Vuetify, Nuxt</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img className="p-3 rounded-full bg-gradient-to-br from-[#79ffb8] to-[#4979ec]" src={CheckIcons} alt="" />
            <div>
              <p className="text-sm text-gray-300 font-normal">able to use Wireframe System</p>
              <p className="text-[12px] text-gray-400 mt-1">Using a tool, Figma and Lunacy</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img className="p-3 rounded-full bg-gradient-to-br from-[#79ffb8] to-[#4979ec]" src={CheckIcons} alt="" />
            <div>
              <p className="text-sm text-gray-300 font-normal">Rebuilder Design</p>
              <p className="text-[12px] text-gray-400 mt-1">able to rebuild designs from UI UX designer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillCard;
