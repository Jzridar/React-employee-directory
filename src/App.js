import React from "react";
import './App.css'
import EmployeePage from "./components/EmployeePage";
import HomePage from "./components/HomePage";
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  // We will use the Route component to specify each route

  const [employees, setEmployees] = useState(
    [
      { name: "James King", title: "President ", workphone: "000-000-0000", mobilephone: "000-000-0000", sms: "000-000-0000", email: "abc@xyz" },
      { name: "Julie Taylor", title: "CEO", workphone: "000-000-0000", mobilephone: "000-000-0000", sms: "000-000-0000", email: "abc@xyz" },
      { name: "Eugene Lee", title: "VP of Marketing", workphone: "000-000-0000", mobilephone: "000-000-0000", sms: "000-000-0000", email: "abc@xyz" },
      { name: "John Williams", title: "VP of sales", workphone: "000-000-0000", mobilephone: "000-000-0000", sms: "000-000-0000", email: "abc@xyz" },
      { name: "Ray Moore", title: "QA manager", workphone: "000-000-0000", mobilephone: "000-000-0000", sms: "000-000-0000", email: "abc@xyz" },
      { name: "Paul Joes", title: "Product owner", workphone: "000-000-0000", mobilephone: "000-000-0000", sms: "000-000-0000", email: "abc@xyz" },
      { name: "Steven Bell", title: "Senior developer", workphone: "000-000-0000", mobilephone: "000-000-0000", sms: "000-000-0000", email: "abc@xyz" },
      { name: "Ray Miller", title: "Junior Developer", workphone: "000-000-0000", mobilephone: "000-000-0000", sms: "000-000-0000", email: "abc@xyz" }
    ]

  );

  const [employee, setEmployee] = useState({})

  const filterEmployee = (searchTerm) => {
    const filteredData = employees.filter((emp) => emp.name.toLowerCase().includes(searchTerm));
    console.log(`filteredData::${filteredData}`)
    setEmployees(filteredData)
  }

  useEffect(() => {
    console.log("Display employees data")
  }, [employees]);

  return (
    <div className="App">
      <>
        <BrowserRouter>

          <Routes>
            <Route path='/'>
              <Route path="/employee" element={<EmployeePage />} />
            </Route>
          </Routes>
          <HomePage employees={employees} search={filterEmployee} />
        </BrowserRouter>
      </>
    </div>
  );
}