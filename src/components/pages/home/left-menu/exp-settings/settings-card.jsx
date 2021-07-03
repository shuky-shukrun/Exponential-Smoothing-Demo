import Card from "../../../../card";
import SimpleSettings from "./simple-settings";
import DoubleSettings from "./double-settings";
import TripleSettings from "./triple-settings";

const SettingsCard = (props) => {
  return (
    <Card>
      <SimpleSettings title="Simple" />
      <DoubleSettings title="Double" />
      <TripleSettings title="Triple" />
    </Card>
  );
};

export default SettingsCard;
