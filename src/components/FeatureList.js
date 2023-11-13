
import React from "react";

const FeatureList = ({ features }) => {
  return (
    <ul className="list-disc list-inside">
      {features.map((feature, index) => (
        <li key={index} className="mb-2">
          {feature}
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
