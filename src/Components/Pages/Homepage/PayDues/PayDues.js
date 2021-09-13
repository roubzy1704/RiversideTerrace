import React from "react";

import "./PayDues.scss";

const PayDues = () => {
  return (
    <React.Fragment>
      <div className="PayDues center">
        <h1>Pay Membership Dues</h1>
        <p>
          We ask that you pay your dues of $100 each year to fund our volunteer
          efforts. We offer a senior citizen discount for members 65 and older.
        </p>
        <p>
          If this applies to you, please see a board member to process your dues
          payment. Thank you!
        </p>
        <h4>Why Should I Pay My Dues? What are the Benefits?</h4>
        <p>
          • Protects your investment in your home by keeping South MacGregor a
          strong and vibrant neighborhood.
        </p>
        <p>
          • Enables volunteer officers, board members and committee to keep
          neighbors informed of events, city services, etc.
        </p>
        <p>
          • Helps improve the looks of our esplanades, parks, and green spaces.
        </p>
        <p>• Advocates for City services and infrastructure improvements.</p>
        <p>• Assists with the organization of community events.</p>
      </div>
    </React.Fragment>
  );
};

export default PayDues;
