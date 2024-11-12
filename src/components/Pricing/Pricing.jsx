import React from "react";
import PricingText from "../../images/pricingtext.png";

import "../../styles/pricingstyles.css";
const Pricing = () => {
  return (
    <div>
      <img className="pricing-image" alt="pricingtext" src={PricingText} />

      <div className="pricing-container__wrapper">
        <div className="pricing-genres__wrapper">
          <ul>
            <li>Couple</li>
            <li>Family</li>
            <li>Newborn</li>
            <li>Maternity</li>
            <li className="list-adjust">Engagement</li>
            <li className="automotive">Automotive</li>
            <li className="event">Event</li>
            <li className="mt-5">Mini Session</li>
          </ul>
        </div>

        <div className="pricing-prices__wrapper">
          <ul>
            <li>$300 per hour</li>
            <li>$300 per hour</li>
            <li>$500 per hour</li>
            <li>$300 per hour</li>
            <li>$300 per hour</li>
            <li>$200 per hour</li>
            <li className="list-divide">$300 per hour</li>
            <li>$300 per hour</li>
            <li className="list-divide">$250 per hour</li>
            <li className="list-divide">$150 per hour</li>
            <li>$200 for 30 minutes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
