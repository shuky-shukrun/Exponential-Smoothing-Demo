import Card from "../../components/card";

const WhatIsPage = (props) => {
  return (
    <Card className={`mx-3 ${props.className ? props.className : ""}`}>
      <h4 className="card-title">Exponential smoothing</h4>
      <section className="normal" id="section-">
        <div id="expsmooth" className="section level1" number="7">
          <p>
            Exponential smoothing was proposed in the late 1950s{" "}
            <span className="citation">
              (
              <a href="bibliography.html#ref-Brown59" role="doc-biblioref">
                Brown, 1959
              </a>
              ;{" "}
              <a href="bibliography.html#ref-Holt57" role="doc-biblioref">
                Holt, 1957
              </a>
              ;{" "}
              <a href="bibliography.html#ref-Winters60" role="doc-biblioref">
                Winters, 1960
              </a>
              )
            </span>
            , and has motivated some of the most successful forecasting methods.
            Forecasts produced using exponential smoothing methods are weighted
            averages of past observations, with the weights decaying
            exponentially as the observations get older. In other words, the
            more recent the observation the higher the associated weight. This
            framework generates reliable forecasts quickly and for a wide range
            of time series, which is a great advantage and of major importance
            to applications in industry.
          </p>
          <p>
            This chapter is divided into two parts. In the first part (Sections{" "}
            <a href="ses.html#ses">7.1</a>–
            <a href="taxonomy.html#taxonomy">7.4</a>) we present the mechanics
            of the most important exponential smoothing methods, and their
            application in forecasting time series with various characteristics.
            This helps us develop an intuition to how these methods work. In
            this setting, selecting and using a forecasting method may appear to
            be somewhat ad hoc. The selection of the method is generally based
            on recognising key components of the time series (trend and
            seasonal) and the way in which these enter the smoothing method
            (e.g., in an additive, damped or multiplicative manner).
          </p>
          <p>
            In the second part of the chapter (Sections{" "}
            <a href="ets.html#ets">7.5</a>–
            <a href="ets-forecasting.html#ets-forecasting">7.7</a>) we present
            the statistical models that underlie exponential smoothing methods.
            These models generate identical point forecasts to the methods
            discussed in the first part of the chapter, but also generate
            prediction intervals. Furthermore, this statistical framework allows
            for genuine model selection between competing models.
          </p>
        </div>
      </section>
    </Card>
  );
};

export default WhatIsPage;
