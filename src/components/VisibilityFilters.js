import React from "react";
import { connect } from "react-redux";
import { visibilityFilters } from "../constants";
import { visibilityFilter } from "../redux/actions";

const VisibilityFilters = ({ activeFilter, visibilityFilter }) => {
  return (
    <div className="visibilityFilterContainer">
      {visibilityFilters.map((filter) => (
        <span
          className={`${activeFilter === filter && "visibilityFilter"}`}
          onClick={() => visibilityFilter(filter)}
        >
          {filter}
        </span>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const activeFilter = state.visibilityFilters.filter;
  return { activeFilter };
};

export default connect(mapStateToProps, { visibilityFilter })(
  VisibilityFilters
);
