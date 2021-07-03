import Card from "../../components/card";

const AboutUsPage = (props) => {
  return (
    <Card className={`mx-3 ${props.className ? props.className : ""}`}>
      <div className="card-title">About us!</div>
    </Card>
  );
};

export default AboutUsPage;
