import AOS from "aos";
import "aos/dist/aos.css";
// integration data AOS
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
import RunningProject from "../content/section/RunningProject";

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
          <div data-aos-delay="150" data-aos="flip-left">
            <ProfileCard />
          </div>
          <div data-aos="flip-right">
            <Calendars />
          </div>
          <div data-aos-duration="1000" data-aos="flip-left">
            <SocialStatic />
          </div>
          <div data-aos="flip-up" data-aos-duration="1000">
            <CommunityCard />
          </div>
          <div data-aos="flip-right">
            <RecoFollowSection />
          </div>
        </div>
        <div>
          {/* center */}
          <div data-aos="flip-right" data-aos-delay="300">
            <GitHubSocial />
          </div>
          <div data-aos="flip-up" data-aos-duration="800">
            <TweetCard />
          </div>
          <div data-aos="flip-down" data-aos-duration="1300">
            <TimelineCard />
          </div>
          <div data-aos="flip-right" data-aos-once="false" data-aos-offset="40">
            <CookiesCard />
          </div>
          <div data-aos="flip-up" data-aos-delay="50" data-aos-once="false" data-aos-offset="40">
            <CardTeam />
          </div>
          <div data-aos="flip-right">
            <FavSection />
          </div>
          <div data-aos="flip-left" data-aos-duration="1500">
            <SprintFork />
          </div>
          <div data-aos="flip-down" data-aos-offset="500">
            <SkillCard />
          </div>
          <div data-aos="flip-right">
            <CardSocial />
          </div>
        </div>
        <div>
          {/* right */}
          <div data-aos="flip-left" data-aos-duration="500">
            <RunningProject />
          </div>
        </div>
      </div>
    </>
  );
}

export default LayoutContent;
