import React from "react";
import FilterName from "./FilterName";
import FilterSpecie from "./FilterSpecie";
import FilterStatus from "./FilterStatus";
import FilterSortByName from "./FilterSortByName";

const Filters = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form className="form" onSubmit={handleForm}>
        <FilterName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
        />
        <FilterSpecie
          filterSpecie={props.filterSpecie}
          handleFilter={props.handleFilter}
        />
        <FilterStatus
          filterStatus={props.filterStatus}
          handleFilter={props.handleFilter}
        />
        <FilterSortByName
          isSort={props.isSort}
          handleFilter={props.handleFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
