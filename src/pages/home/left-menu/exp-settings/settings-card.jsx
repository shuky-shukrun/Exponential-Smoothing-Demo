import Card from "../../../../components/card";
import MethodSettings from "./method-settings";

const SettingsCard = (props) => {
  return (
    <Card className={props.className ? props.className : ""}>
      <MethodSettings title="Simple" smoothingParams={["Alpha"]} />
      <hr className="mt-4 mb-4"></hr>
      <MethodSettings title="Double" smoothingParams={["Alpha", "Beta"]} />
      <hr className="mt-4 mb-4"></hr>
      <MethodSettings
        title="Triple"
        smoothingParams={["Alpha", "Beta", "Gama"]}
      />
    </Card>
  );
};

export default SettingsCard;
