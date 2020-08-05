import { useState } from "react";

function useCountrySelected(initialVal = "") {
  const [countryName, setCountryName] = useState(initialVal);

  const handleChange = (e) => {
    if (e.target.innerText === "Global Totals") {
      setCountryName("");
    } else {
      setCountryName(e.target.innerText);
    }
  };

  return [countryName, handleChange];
}

export default useCountrySelected;
