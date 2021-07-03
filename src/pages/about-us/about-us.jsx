import Card from "../../components/card";

const AboutUsPage = (props) => {
  return (
    <div className={`mx-3 ${props.className ? props.className : ""}`}>
      <Card>
        <div className="card-title">About us!</div>
      </Card>
    </div>
  );
};

export default AboutUsPage;
