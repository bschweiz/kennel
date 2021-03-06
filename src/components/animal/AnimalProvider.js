import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const AnimalContext = React.createContext()
/* This component establishes what data can be used. */

export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        return fetch("http://localhost:8088/Animals")
            .then(res => res.json())
            .then(setAnimals)
    }

    const addAnimal = animal => {
        return fetch("http://localhost:8088/Animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
            .then(getAnimals)
    }

    /*
        You return a context provider which has the
        `Animals` state, the `addAnimal` function,
        and the `getAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <AnimalContext.Provider value={{
            animals, addAnimal, getAnimals
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}