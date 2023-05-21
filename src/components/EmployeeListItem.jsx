import { Link } from "react-router-dom"

export default function EmployeeListItem(props) {
  const employee = props.employee

  return (
    <>
      <Link to={`/employee?id=${employee.name}`}> <h2>{employee.name}</h2></Link>
      <div className="EmployeeListItem">
        {employee.title}
      </div>
    </>
  );

}