import PageCountry from "./PageCountry";
import Countries from "./countries";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {

  const [countries, setCountries] = useState([]);

  async function getCoutries() {
    try {
      const responce = await fetch("https://restcountries.com/v3.1/all");
      if (!responce.ok) {
        throw new Error("Error het data");
      }
      const result = await responce.json();
      setCountries(result);
    } catch (eror) {
      console.log(eror);
    }
  }

  useEffect(() => {
    getCoutries();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:name" element={<PageCountry countries={countries} />} />
        <Route path="*" element={<Countries countries={countries}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
