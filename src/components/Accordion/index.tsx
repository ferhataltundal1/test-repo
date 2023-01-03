import React, { memo, useCallback, useState } from "react";
import "./index.scss";

const Accordion = memo(() => {
  const [active, setActive] = useState(false);
  const ref = React.useRef<any>(null);

  const handleActive = useCallback(() => {
    setActive((p) => !p);
    if (active) {
      return (ref.current.style.maxHeight = ref.current.scrollHeight + "px");
    }
    ref.current.style.maxHeight = "50px";
  }, [ref, active]);
  return (
    <div className="accordion-container" ref={ref}>
      <div className="accordion-title" onClick={handleActive}>
        Deneme
      </div>
      <div className="accordion-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolor
        repellendus perferendis laborum, fuga nemo? Alias aspernatur dicta
        veniam, soluta nihil sit. Officia corrupti doloribus odit debitis quos
        totam id!
      </div>
    </div>
  );
});

export default Accordion;
