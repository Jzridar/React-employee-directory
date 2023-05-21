import Header from "./Header";

export default function EmployeePage(props) {
  const employee = props.employee
  console.log('#####################################')
  const loaded = () => {
    return (
      <div className="EmployeePage">
      <Header title="Employee" />
       <div>{employee.name}</div>
       <div>Call office {employee.workphone}</div>
       <div>Call mobile {employee.mobilephone}</div>
       <div>SMS {employee.sms}</div>
       <div>E-mail{employee.email}</div>
    </div>
    );
  };

  //function to return loading JSX
  const loading = () => {
    return <h1>No employee to Display</h1>;
  };

  
  return employee ? loaded() : loading();
  
};