import {
  generalInfo,
  simpleInfo,
  doubleInfo,
  tripleInfo,
} from "./what-is-info";
import WhatIsComponent from "./what-is-component";

const WhatIsPage = (props) => {
  return (
    <div className="container">
      <WhatIsComponent className="m-3" title="" info={generalInfo} />
      <WhatIsComponent className="m-3" title="Simple" info={simpleInfo} />
      <WhatIsComponent className="m-3" title="Double" info={doubleInfo} />
      <WhatIsComponent className="m-3" title="Triple" info={tripleInfo} />
    </div>
  );
};

export default WhatIsPage;
