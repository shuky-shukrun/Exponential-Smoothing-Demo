import Card from "../card";
import DataCard from "./data-card";
import SettingsCard from "./settings-card";

const LeftMenu = (props) => {
  return (
    <div>
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
