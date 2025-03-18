import { useState, useEffect } from "react";
import UseCurrencyInfo from "../hooks/UseCurrencyInfo.jsx";

function InputBox({
  label,
  amount,
  currency,
  options,
  amountChange,
  currencyChange,
}) {
  return (
    <div className="inputBox">
      <label htmlFor={label}>{label}:</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => amountChange(e.target.value)}
      ></input>
      <br/>
      <label>Currency Type:</label>
      <select value={currency} onChange={(e) => currencyChange(e.target.value)}>
        {
            options.map((opt)=>  <option key={opt} value={opt}>{opt}</option> )
        }
      </select>
    </div>
  );
}

export default InputBox;
