import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"

import { Employee } from "./Employee"
import "./Employee.css"

export const EmployeeList = (props) => {
    // This state changes when `getEmployees()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("EmployeeList: Initial render before data")
        getEmployees()
        .then(getLocations)
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the employee state changed.
    */
    useEffect(() => {
        console.log("EmployeeList: Employee state changed")
        console.log(employees)
    }, [employees])
    if ( employees.length && locations.length) {
    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employeeList">

                {employees.map(employee => {
                const locale = locations.find(loc => loc.id === employee.locationId) 
                return<Employee key={employee.id}
                        employee={employee} 
                        location={locale}/>})}
            </article>
        </div>
    )} else { return <div></div> }
    
}