import React from "react"
import "./Animal.css"

// the line below is an example of OBJECT DESTRUCTURING,
export const Animal = ({animal, customer, location}) => (
    <section className="animal">
        <h3 className="animal__name">Name: {animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <div className="animal__customerId">Owner: {customer.name}</div>
        <div className="animal__locationId">Location: {location.name}</div>
    </section>
)