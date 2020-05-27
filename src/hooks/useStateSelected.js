import { useState } from "react";

function useStateSelected(initialVal = "") {
  const [stateName, setStateName] = useState(initialVal);

  const handleChange = (e) => {
    setStateName(e.target.innerText);
  };

  return [stateName, handleChange];
}

export default useStateSelected;
