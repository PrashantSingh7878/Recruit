import React from "react";
import { useSelector } from "react-redux";


const CandidateDetails = () => {
  
   const raw = useSelector((state) => state.candidate.data);

  // Ensure we always have an array to render
  const data = Array.isArray(raw) ? raw : [];

  const mid  =   Math.ceil(data?.length / 2);
  const detailsLeft = data?.slice(0, mid);
  const detailsRight = data?.slice(mid);

  

  return (
   data  &&(
    <div className="candidate-details">
      <div className="details-column">
        {detailsLeft.map((item, index) => (
          <div className="detail-row" key={index}>
            <span className="label">{item.label}</span>
            <span className="value">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="details-column">
        {detailsRight.map((item, index) => (
          <div className="detail-row" key={index}>
            <span className="label">{item.label}</span>
            <span className="value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
  );
};

export default CandidateDetails;
