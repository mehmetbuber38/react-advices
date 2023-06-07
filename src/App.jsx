import React, { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = "	https://api.adviceslip.com/advice";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);


  const fetchAdvice = (() => {
    axios.get(baseURL)
      .then((response) => {
        setAdvice(response?.data?.slip?.advice)
      });
  });

  const handleButtonClick = () => {
    fetchAdvice();
  }

  if (!advice) return null;
  return (
    <div>
      <h1>Advices</h1>
      <p>{advice}</p>
      <button onClick={handleButtonClick}>Button</button>
    </div>
  )
}

export default App
