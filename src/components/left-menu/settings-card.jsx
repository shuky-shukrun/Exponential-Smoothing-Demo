import Card from "../card";
import ExpSettings from "./exp-settings";

const SettingsCard = (props) => {
  return (
    <Card>
      <ExpSettings title="Simple" />
      <ExpSettings title="Double" />
      <ExpSettings title="Triple" />
    </Card>
  );
};

export default SettingsCard;
