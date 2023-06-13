import React from "react";

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job) => {
        let index = jobs.indexOf(job);
        return (
          <button
            type="button"
            key={job.id}
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
            onClick={() => setCurrentItem(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
