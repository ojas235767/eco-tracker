import React, { useState } from 'react';

const Calculator = () => {
  const [miles, setMiles] = useState('');
  const [electricity, setElectricity] = useState('');
  const [meals, setMeals] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const carbonMiles = parseFloat(miles) * 0.404;
    const carbonElectricity = parseFloat(electricity) * 0.92;
    const carbonMeat = parseFloat(meals) * 7; 
    const total = (carbonMiles || 0) + (carbonElectricity || 0) + (carbonMeat || 0);
    setResult(total.toFixed(2));
  };

  return (
    <section>
      <h2>Carbon Footprint Calculator</h2>

      <label>
        🚗 Miles driven per day:
        <input type="number" value={miles} onChange={(e) => setMiles(e.target.value)} />
      </label>
      <br />

      <label>
        ⚡ Electricity used per day (kWh):
        <input type="number" value={electricity} onChange={(e) => setElectricity(e.target.value)} />
      </label>
      <br />

      <label>
        🥩 Meat meals per day:
        <input type="number" value={meals} onChange={(e) => setMeals(e.target.value)} />
      </label>
      <br />

      <button onClick={calculate}>Calculate</button>

      {result && (
        <p>Your daily carbon footprint is approximately <strong>{result} kg</strong> CO₂</p>
      )}
    </section>
  );
};

export default Calculator;
