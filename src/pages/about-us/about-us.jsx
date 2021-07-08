import AboutService from "./about-service";
import AboutTeam from "./about-team";
import AboutGeneral from "./about-general";
import Card from "../../components/card";

const AboutUsPage = (props) => {
  return (
    <div className="mx-3">
      <Card>
        <AboutGeneral />
        <hr className="mt-4 mb-4"></hr>
        <AboutService />
      </Card>
      <AboutTeam />
    </div>
  );
};

export default AboutUsPage;
