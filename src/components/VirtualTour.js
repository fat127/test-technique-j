import React from "react";

function VirtualTour() {
  return (
    <div className="tour-container">
      <h2>Visite Virtuelle de la Villa Janna</h2>
      <iframe
        src="https://my.matterport.com/show/?m=jm5WwEA3HUN"
        width="100%"
        height="600px"
        frameBorder="0"
        allowFullScreen
        title="Visite Virtuelle"
      ></iframe>
    </div>
  );
}

export default VirtualTour;
