import { useState } from "react";

function useStateSelected(initialVal = "") {
  const [stateName, setStateName] = useState(initialVal);

  const handleChange = (e) => {
    if (e.target.innerText === "U.S. Totals") {
      setStateName("");
    } else {
      setStateName(e.target.innerText);
    }
  };

  return [stateName, handleChange];
}

export default useStateSelected;
