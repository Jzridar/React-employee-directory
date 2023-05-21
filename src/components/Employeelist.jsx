import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList(props) {

 const employees = props.data
  return (
    <div className="employeelist">
      { employees.map((person) => {
        
        return (
          <EmployeeListItem key={person.name} employee={person}/>
        );
      }) }
    </div>
  );
};