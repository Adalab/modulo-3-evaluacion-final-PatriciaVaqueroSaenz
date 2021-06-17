import React from "react";

const FilterStatus = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "status",
    });
  };

  return (
    <>
      <label className="form__label" htmlFor="specie"></label>

      <select
        className="form__input-text"
        name="status"
        id="status"
        value={props.filterStatus}
        onChange={handleChange}
      >
        <option value="">Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </>
  );
};

export default FilterStatus;
