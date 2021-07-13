import React from "react";

export const VisibilityFilters = () => {
  return (
    <div className="visibilityFilterContainer">
      {["All", "Completed", "Incomplete"].map((visibilityFilter) => (
        <span className="visibilityFilter">{visibilityFilter}</span>
      ))}
    </div>
  );
};
