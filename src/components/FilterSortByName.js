import React from "react";

const FilterSortByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      checked: ev.currentTarget.checked,
      key: "sort",
    });
  };

  return (
    <>
      <label htmlFor="sort" className="sort__label">
        Order by name{" "}
      </label>

      <input
        className="inputSort"
        name="sort"
        id="sort"
        value="sort"
        type="checkbox"
        onChange={handleChange}
        checked={props.isSort ? true : false}
      />
    </>
  );
};
export default FilterSortByName;
