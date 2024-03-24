import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import HeaderSection from "../content/section/Header";
// left
import ProfileCard from "../content/section/Profile";
import Calendars from "../content/section/Calendars";
import SocialStatic from "../content/section/SocialCard";
import CommunityCard from "../content/section/CommunityCard";
import RecoFollowSection from "../content/section/RecoFollow";

// center
import GitHubSocial from "../content/section/SocialGithub";
import TweetCard from "../content/section/TweetCard";
import TimelineCard from "../content/section/TimeLine";
import CookiesCard from "../content/section/CookiesCard";
import CardTeam from "../content/section/CardTeam";
import FavSection from "../content/section/FavSection";
import SprintFork from "../content/section/SprintFork";
import SkillCard from "../content/section/SkillCard";
import CardSocial from "../content/section/SocialMediaCard";
// right

function LayoutContent() {
  return (
    <>
      {/* header Section */}
      <div>
        <HeaderSection />
      </div>
      {/* card layout */}
      <div className="grid lg:flex xl:flex items-center justify-center gap-4">
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
          <TweetCard />
          <TimelineCard />
          <CookiesCard />
          <CardTeam />
          <FavSection />
          <SprintFork />
          <SkillCard />
          <CardSocial />
        </div>
        <div>{/* right */}</div>
      </div>
    </>
  );
}

export default LayoutContent;
