import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animal.css"

export const AnimalList = ({ history }) => {
    const { getAnimals, searchTerms, animals } = useContext(AnimalContext)
    const [ filteredAnimals, setFiltered] = useState([])
    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])

    useEffect (() => {
        if (searchTerms !== "") {
            // if searchTerms ie the search bar is NOT empty then pass the matching subset of animals based on 
            // the .filter to the setFiltered function. if there are no matches to the text, display all animals
            const subset = animals.filter(a => a.name.toLowerCase().includes(searchTerms))
        setFiltered(subset)
        } else { setFiltered(animals)}
    // this hook watches for state changes in searchTerms (& animals?)
    }, [searchTerms, animals])
    
    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    filteredAnimals.map(animal => {
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