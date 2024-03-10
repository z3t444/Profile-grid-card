import HeaderSection from "../content/section/Header";
// left
import ProfileCard from "../content/section/Profile";
import Calendars from "../content/section/Calendars";
import SocialStatic from "../content/section/SocialCard";
import CommunityCard from "../content/section/CommunityCard";
import RecoFollowSection from "../content/section/RecoFollow";

// center
import GitHubSocial from "../content/section/SocialGithub";
// right

function LayoutContent() {
  return (
    <>
      {/* header Section */}
      <div>
        <HeaderSection />
      </div>
      {/* card layout */}
      <div className="flex items-center gap-5">
        {/* left */}
        <div>
          <ProfileCard />
          <Calendars />
          <SocialStatic />
          <CommunityCard />
          <RecoFollowSection />
        </div>
        <div>
          {/* center */}
          <GitHubSocial />
        </div>
        <div>{/* right */}</div>
      </div>
    </>
  );
}

export default LayoutContent;
