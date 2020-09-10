import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Planets = props => {
    const [planet, setPlanet] = useState({})

    useEffect(() => {
        Axios.get(`https://swapi.dev/api/planets/${props.id}`)
            .then(response => setPlanet(response.data))
            .catch(err => console.log(err))
    }, [props.id]);

    return (
        <>
            <h1>{planet.name}</h1>
            <p>Diameter: {planet.diameter} km</p>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Population: {planet.population} individuals</p>
        </>
    )
}

export default Planets;