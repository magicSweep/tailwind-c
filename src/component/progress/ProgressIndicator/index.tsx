import React from "react";

const ProgressIndicator = () => {
  return (
    <div className="relative overflow-hidden h-0.5 px-0 py-2">
      <div className="progress-indicator__track"></div>
      <div
        className="progress-indicator__bar animate-progress"
        role="progressbar"
      ></div>
    </div>
  );
};

export default ProgressIndicator;
