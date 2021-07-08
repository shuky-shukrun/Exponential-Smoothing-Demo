import AboutService from "./about-service";
import AboutTeam from "./about-team";
import AboutGeneral from "./about-general";

const AboutUsPage = (props) => {
  return (
    <div>
      <AboutGeneral />
      <AboutService />
      <AboutTeam />
    </div>
  );
};

export default AboutUsPage;
