import React from "react";

const Event = () => {
  const formData = JSON.parse(localStorage.getItem("formData"));
  return (
    <div>
      <img src={formData.image} alt="location" />
      <h3>{formData.eName}</h3>
      <p>Hosted by {formData.hName}</p>
      <p>
        {formData.startDate} to {formData.endDate}
      </p>
      <p>{formData.locate}</p>
    </div>
  );
};

export default Event;
