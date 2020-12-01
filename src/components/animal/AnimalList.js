import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animal.css"

export const AnimalList = ({ history }) => {
    const { getAnimals, animals } = useContext(AnimalContext)

    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    animals.map(animal => {
                        return <Animal key={animal.id} animal={animal} />
                    })
                }
            </div>
        </>
    )
}








// import React, { useContext, useEffect } from "react"
// import { AnimalContext } from "./AnimalProvider"
// import { LocationContext } from "../location/LocationProvider"
// import { CustomerContext } from "../customer/CustomerProvider"
// import { Animal } from "./Animal"
// import "./Animal.css"

// export const AnimalList = (props) => {
//     const { animals, getAnimals } = useContext(AnimalContext)
//     const { locations, getLocations } = useContext(LocationContext)
//     const { customers, getCustomers } = useContext(CustomerContext)

//     useEffect(() => {
//         console.log("AnimalList: Initial render before data")
//         getLocations()
//         getCustomers()
//         getAnimals()
        
//     }, [])
//     if ( animals.length && customers.length && locations.length) {
//         console.log(props)
//         return (
//             <div className="animals">
//             <h1>Animals</h1>
//             <button onClick={() => props.history.push("/animals/create")}>
//                 Add Appointment
//             </button>
//             {
//                 animals.map(animal => {
//                 const owner = customers.find(cus => cus.id === animal.customerId)
//                 const clinic = locations.find(loc => loc.id === animal.locationId)

//                 return <Animal key={animal.id}
//                             location={clinic}
//                             customer={owner}
//                             animal={animal} />
//             })
//             }
//             </div>
//     )} else { return <div></div> }
// }