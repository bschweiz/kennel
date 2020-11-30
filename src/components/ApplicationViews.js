
import React from "react"
import { Route } from "react-router-dom"

import { AnimalProvider } from "./animal/AnimalProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { LocationProvider } from "./location/LocationProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./employee/EmployeeList";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeForm } from "./employee/EmployeeForm";
import { AnimalForm } from "./animal/AnimalForm"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals" render={
                            props => <AnimalList {...props} />
                            } />

                        <Route exact path="/animals/create" render={
                                props => <AnimalForm {...props} />
                            } />
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <EmployeeProvider>
            <AnimalProvider>
                <LocationProvider>
                    <Route exact path="/employees" render={
                        props => <EmployeeList {...props} />
                    } />

                    <Route exact path="/employees/create" render={
                        props => <EmployeeForm {...props} />
                    } />
                </LocationProvider>
            </AnimalProvider>
            </EmployeeProvider>

            <CustomerProvider>
                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
        </>
    )
}