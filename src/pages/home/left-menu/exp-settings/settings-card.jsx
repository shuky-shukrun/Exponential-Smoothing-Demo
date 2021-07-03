import Card from "../../../../components/card";
import SimpleSettings from "./simple-settings";
import DoubleSettings from "./double-settings";
import TripleSettings from "./triple-settings";

const SettingsCard = (props) => {
  return (
    <Card className={props.className ? props.className : ""}>
      <SimpleSettings title="Simple" />
      <hr className="mt-4 mb-4"></hr>
      <DoubleSettings title="Double" />
      <hr className="mt-4 mb-4"></hr>
      <TripleSettings title="Triple" />
    </Card>
  );
};

export default SettingsCard;
