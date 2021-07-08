import { InfoCircle, Save, GraphUp } from "react-bootstrap-icons";

const AboutService = (props) => {
  return (
    <section className="section bg-c-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h3 className="main-heading">Our Service</h3>
            <div className="underline"></div>
          </div>
          <div className="col-md-4 text-center">
            <p>
              <GraphUp className="me-4" size="100" />
            </p>
            <h5>Exponential Smoothing Demo</h5>
            <p>Runs three types of Exponential Smoothing methods:</p>
            <p>
              Simple Exponential Smoothing
              <br></br>
              Double Exponential Smoothing
              <br></br>
              Triple Exponential Smoothing
            </p>
          </div>
          <div className="col-md-4 text-center">
            <p>
              <Save className="me-4" size="100" />
            </p>
            <h5>Save your data</h5>
            <p>Save your data for reuse in the demo</p>
          </div>
          <div className="col-md-4 text-center">
            <p>
              <InfoCircle className="me-4" size="100" />
            </p>
            <h5>What is Exponential Smoothing?</h5>
            <p>
              Get information about Exponential Smoothing and the three methods
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService;
