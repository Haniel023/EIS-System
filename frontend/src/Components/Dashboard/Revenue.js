import React from "react";
import MonthlyInvent from "../Api-app/MonthlyInvent";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Revenue = () => {
  return (
    <div className="revenuePanel">
      <h1 id="revenueLabel">Total Inventory</h1>
      <Carousel
        showStatus={false}
        height={500}
        className="carousel-slider"
      >
        <MonthlyInvent className="carousel" />
      </Carousel>
    </div>
  );
};

export default Revenue;
