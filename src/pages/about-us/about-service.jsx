import { InfoCircle, Save, GraphUp } from "react-bootstrap-icons";
import ServiceHead from "./service-head";

const AboutService = (props) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h3 className="main-heading ">Our Service</h3>
            <div className="underline"></div>
          </div>
          <div className="col-lg-4 text-center p-3">
            <ServiceHead
              icon={<GraphUp className="me-4" size="100" />}
              name="Exponential Smoothing Demo"
            />
            <p>Runs three types of Exponential Smoothing methods:</p>
            <p>
              Simple Exponential Smoothing
              <br></br>
              Double Exponential Smoothing
              <br></br>
              Triple Exponential Smoothing
            </p>
          </div>
          <div className="col-lg-4 text-center p-3">
            <ServiceHead
              icon={<Save className="me-4" size="100" />}
              name="Save your data"
            />
            <p>Save your data in firebase database for reuse in the demo</p>
          </div>
          <div className="col-lg-4 text-center p-3">
            <ServiceHead
              icon={<InfoCircle className="me-4" size="100" />}
              name="What is Exponential Smoothing?"
            />
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
