import Card from "../../../components/card";
import DataCard from "./data-card";
import SettingsCard from "./exp-settings/settings-card";

const LeftMenu = (props) => {
  return (
    <div className={props.className ? props.className : ""}>
      <Card>
        <h5 className="card-title">Settings</h5>
        <DataCard className="mb-3" />
        <SettingsCard />
      </Card>
      <br />
    </div>
  );
};

export default LeftMenu;
