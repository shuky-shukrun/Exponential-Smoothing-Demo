import { InfoCircle, Save, GraphUp } from "react-bootstrap-icons";

export const aboutUsInfo = {
  title: "About Us",
  icon: "",
  info: (
    <>
      <p>
        This demo system is our final project on 'Advanced WEB Technologies'
        course.
        <br></br>
        The system allows the user to run three different methods of exponential
        smoothing and optimize the smoothing parameters in a simple and
        convenient way.
      </p>
      <p>
        The source code of this project is available on{" "}
        <a href="https://github.com/shuky-shukrun/Exponential-Smoothing-Demo">
          GitHub
        </a>
        .
      </p>
    </>
  ),
};

export const expServiceInfo = {
  title: "Exponential Smoothing Demo",
  icon: <GraphUp className="me-4" size="100" />,
  info: (
    <>
      <p>Runs three types of Exponential Smoothing methods:</p>
      <p>
        Simple Exponential Smoothing
        <br></br>
        Double Exponential Smoothing
        <br></br>
        Triple Exponential Smoothing
      </p>
    </>
  ),
};

export const saveDataInfo = {
  title: "Save Your Data",
  icon: <Save className="me-4" size="100" />,
  info: <p>Save your data in firebase database for reuse in the demo</p>,
};

export const whatIsServiceInfo = {
  title: "What is Exponential Smoothing?",
  icon: <InfoCircle className="me-4" size="100" />,
  info: (
    <p>Get information about Exponential Smoothing and the three methods</p>
  ),
};
