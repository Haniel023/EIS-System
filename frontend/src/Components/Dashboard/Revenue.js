import React from "react";
import MonthlyInvent from "../Api-app/MonthlyInvent";

const Revenue = () => {
  return (
    <div className="revenuePanel">
      <h1 id="revenueLabel">Total Inventory</h1>
      <MonthlyInvent/>
    </div>
  );
};

export default Revenue;
