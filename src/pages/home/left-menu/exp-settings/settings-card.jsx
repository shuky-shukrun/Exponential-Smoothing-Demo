import Card from "../../../../components/card";
import MethodSettings from "./method-settings";

const SettingsCard = (props) => {
  return (
    <Card className={props.className ? props.className : ""}>
      <MethodSettings
        title="Simple"
        smoothingParams={["Alpha"]}
        onParamUpdate={props.onParamUpdate}
        paramsData={props.paramsData}
        graphData={props.graphData}
      />
      <hr className="mt-4 mb-4"></hr>
      <MethodSettings
        title="Double"
        smoothingParams={["Alpha", "Beta"]}
        onParamUpdate={props.onParamUpdate}
        paramsData={props.paramsData}
        graphData={props.graphData}
      />
      <hr className="mt-4 mb-4"></hr>
      <MethodSettings
        title="Triple"
        smoothingParams={["Alpha", "Beta", "Gama", "Season"]}
        onParamUpdate={props.onParamUpdate}
        paramsData={props.paramsData}
        graphData={props.graphData}
      />
    </Card>
  );
};

export default SettingsCard;
