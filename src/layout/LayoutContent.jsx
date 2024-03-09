import HeaderSection from "../content/section/Header";
// left
import ProfileCard from "../content/section/Profile";
import Calendars from "../content/section/Calendars";
import SocialStatic from "../content/section/SocialCard";

function LayoutContent() {
  return (
    <>
      {/* header Section */}
      <div>
        <HeaderSection />
      </div>
      {/* card layout */}
      <div>
        {/* left */}
        <div>
          <ProfileCard />
          <Calendars />
          <SocialStatic />
        </div>
        <div>{/* center */}</div>
        <div>{/* right */}</div>
      </div>
    </>
  );
}

export default LayoutContent;
