import React from "react";

const FilterName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };

  return (
    <>
      <label className="form__label" htmlFor="name"></label>
      <input
        className="form__input-text"
        placeholder="Search your character:"
        type="text"
        name="name"
        id="name"
        value={props.filterName}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterName;
