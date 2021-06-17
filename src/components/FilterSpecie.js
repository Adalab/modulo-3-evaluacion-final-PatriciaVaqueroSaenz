import React from "react";

const FilterSpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "specie",
    });
  };

  return (
    <>
      <label className="form__label" htmlFor="specie"></label>

      <select
        className="form__input-text"
        name="specie"
        id="specie"
        value={props.filterSpecie}
        onChange={handleChange}
      >
        <option value="">Species</option>
        <option value="Alien">Alien</option>
        <option value="Human">Human</option>
      </select>
    </>
  );
};

export default FilterSpecie;
