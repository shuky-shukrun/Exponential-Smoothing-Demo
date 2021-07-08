import MorPic from "../../images/mor.png";
import ShukyPic from "../../images/shuky.jpg";
import TeamMember from "./team-member";

const AboutTeam = (props) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4 text-center">
            <h3 className="main-heading">Our Team</h3>
            <div className="underline mx-auto"></div>
          </div>
          <TeamMember
            src={MorPic}
            name="Mor Skurka"
            title="Software Engineer Student"
          />
          <TeamMember
            src={ShukyPic}
            name="Shuky Shukrun"
            title="Software Engineer Student"
          />
          <TeamMember
            src={MorPic}
            name="Uzin (The Dog)"
            title="The best dog!"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
