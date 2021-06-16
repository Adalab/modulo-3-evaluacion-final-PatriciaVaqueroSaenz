import React from 'react';
import FilterName from './FilterName';

const Filters = (props) =>{

  return (
    <section>
        <form>
            <FilterName filterName={props.filterName} handleFilter={props.handleFilter}/>
        </form>
    </section>
  )
};

export default Filters;
