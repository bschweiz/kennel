import React from "react"
import "./Animal.css"

export const Animal = ({animal}) => (
    <section className="animal">
        <h3 className="animal__name">Name: {animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <div className="animal__customerId">Owner: {animal.customerId}</div>
        <div className="animal__locationId">Location: {animal.locationId}</div>
    </section>
)