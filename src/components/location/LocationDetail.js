import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export const LocationDetail = (props) => {
    const { releaseLocation , getLocationById } = useContext(LocationContext)

    const [location, setLocation] = useState({ employee: {}, animal: {}})
    useEffect(() => {
        const locationId = parseInt(props.match.params.locationId)
        getLocationById(locationId)
            .then(setLocation)
    }, [])

    console.log(location)
    return (
        <section className="location">
            <h2 className="location__name">{location.name}</h2>
            <address className="location__address">{location.address}</address>
            <div>
                <h4>Employees</h4>
                { props.location.state.chosenLocation.employees.map(e => e.name).join(", ") }
            </div>
            <div>
                <h4>Current Residents</h4>
                { props.location.state.chosenLocation.animals.map(a => a.name).join(", ") }
            </div>
        </section>
    )
}