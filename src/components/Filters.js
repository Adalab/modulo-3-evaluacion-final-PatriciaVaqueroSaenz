import React from 'react';
import FilterName from './FilterName';
import FilterSpecie from './FilterSpecie';

const Filters = (props) =>{
  const handleForm = (ev) => {
    ev.preventDefault();
  }
  return (
    <section>
        <form className="form" onSubmit={handleForm}>
            <FilterName filterName={props.filterName} handleFilter={props.handleFilter}/>
            <FilterSpecie filterSpecie={props.filterSpecie}handleFilter={props.handleFilter} />
        </form>
    </section>
  )
};

export default Filters;
