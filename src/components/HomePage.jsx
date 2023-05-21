import React from 'react'
import SearchBar from './Searchbar';
import Header from './Header';
import EmployeeList from './Employeelist';

export default function HomePage(props) {
  return (
    <div>
      <Header title="Employee Directory"/>
      <SearchBar search={props.search}/>
      <EmployeeList data={props.employees}/>
    </div>
  )
}

