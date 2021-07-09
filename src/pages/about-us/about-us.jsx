import Card from "../../components/card";
import "../../App.css";
import InfoComponent from "../../components/info-component";
import {
  aboutUsInfo,
  expServiceInfo,
  saveDataInfo,
  whatIsServiceInfo,
} from "./about-info";
import ServiceComponent from "./service-component";
import MorPic from "../../images/mor.png";
import ShukyPic from "../../images/shuky.jpg";
import UziPic from "../../images/uzi.jpg";

import TeamMember from "./team-member-component";

const AboutUsPage = (props) => {
  return (
    <div className="px-3 pb-3">
      <Card>
        <InfoComponent title={"About Us"} info={aboutUsInfo.info} />

        <hr className="mt-4 mb-4"></hr>

        <InfoComponent title="Our Services">
          <div className="row">
            <ServiceComponent
              title={expServiceInfo.title}
              icon={expServiceInfo.icon}
              info={expServiceInfo.info}
            />
            <ServiceComponent
              title={saveDataInfo.title}
              icon={saveDataInfo.icon}
              info={saveDataInfo.info}
            />{" "}
            <ServiceComponent
              title={whatIsServiceInfo.title}
              icon={whatIsServiceInfo.icon}
              info={whatIsServiceInfo.info}
            />
          </div>
        </InfoComponent>

        <hr className="mt-4 mb-4"></hr>

        <InfoComponent title="Our Team">
          <div className="row">
            <TeamMember
              src={MorPic}
              name="Mor Skurka"
              title="Software Engineering Student"
            />
            <TeamMember
              src={ShukyPic}
              name="Shuky Shukrun"
              title="Software Engineering Student"
            />
            <TeamMember
              src={UziPic}
              name="Uzin (The Dog)"
              title="The best dog!"
            />
          </div>
        </InfoComponent>
      </Card>
    </div>
  );
};

export default AboutUsPage;
