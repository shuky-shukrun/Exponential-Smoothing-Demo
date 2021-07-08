import MorPic from "../../images/mor.png";

const AboutTeam = (props) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4 text-center">
            <h3 className="main-heading">Our Team</h3>
            <div className="underline mx-auto"></div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <img src={MorPic} className="w-100 border-bottom" alt="" />
              <div className="card-body">
                <h6>Mor Skurka</h6>
                <div className="underline"></div>
                <p>Software Engineer Student</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <img
                src={MorPic}
                className="w-100
                   border-bottom"
                alt=""
              />
              <div className="card-body">
                <h6>Shuky Shukrun</h6>
                <div className="underline"></div>
                <p>Software Engineer Student</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <img
                src={MorPic}
                className="w-100
                   border-bottom"
                alt=""
              />
              <div className="card-body">
                <h6>Uzin (The Dog)</h6>
                <div className="underline"></div>
                <p>The best dog!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
