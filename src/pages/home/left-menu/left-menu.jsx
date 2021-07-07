import Card from "../../../components/card";
import DataCard from "./data-card";
import SettingsCard from "./exp-settings/settings-card";

const LeftMenu = (props) => {
  return (
    <div className={props.className ? props.className : ""}>
      <Card>
        <h5 className="card-title">Settings</h5>
        <DataCard
          className="mb-3"
          graphData={props.graphData}
          onDataUpdate={props.onDataUpdate}
          defaultData={props.defaultData}
        />
        <SettingsCard
          onParamUpdate={props.onParamUpdate}
          paramsData={props.paramsData}
          graphData={props.graphData}
        />
      </Card>
      <br />
    </div>
  );
};

export default LeftMenu;
