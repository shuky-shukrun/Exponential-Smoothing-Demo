import WhatIsDouble from "./what-is-double";
import WhatIsGeneral from "./what-is-general";
import WhatIsSimple from "./what-is-simple";
import WhatIsTriple from "./what-is-triple";

const WhatIsPage = (props) => {
  return (
    <div className="container">
      <WhatIsGeneral className="mx-3" />
      <WhatIsSimple className="m-3" title="Simple" />
      <WhatIsDouble className="m-3" title="Double" />
      <WhatIsTriple className="m-3" title="Triple" />
    </div>
  );
};

export default WhatIsPage;
