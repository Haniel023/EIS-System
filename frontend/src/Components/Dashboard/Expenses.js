import React from "react";
import MonthlyCost from '../Api-app/MonthlyCost'
import YearlyCost from '../Api-app/YearlyCost'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Expenses = () => {
  return (
    <div className="expensesPanel">
      <h1 id="expensesLabel">Total Cost</h1>
      <div className="graph">
        <Carousel showArrows={true} autoplay showThumbs={false} height={500} className="carousel-slider">
          <div>
            <MonthlyCost />
          </div>

          <div>
            <YearlyCost />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Expenses;
