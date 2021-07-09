const WhatIsComponent = (props) => {
  return (
    <>
      <section className="section">
        <div className="container">
          <h3 className="main-heading">{props.title} Exponential smoothing</h3>
          <div className="underline"></div>
          {props.info}
        </div>
      </section>
    </>
  );
};

export default WhatIsComponent;
