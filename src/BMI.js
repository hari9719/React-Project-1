import React, { useState } from "react";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height from cm to meters
      const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBmi);

      // Determine BMI category
      if (calculatedBmi < 18.5) {
        setCategory("Underweight");
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        setCategory("Normal weight");
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        setCategory("Overweight");
      } else {
        setCategory("Obesity");
      }
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>BMI Calculator</h1>
      <div>
        <label>
          Weight (kg): 
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Height (cm): 
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateBMI} style={{ marginTop: "10px" }}>
        Calculate
      </button>
      {bmi && (
        <div style={{ marginTop: "20px" }}>
          <p>Your BMI: {bmi}</p>
          <p>Status: {category}</p>
        </div>
      )}
    </div>
  );
};

export default BMI;