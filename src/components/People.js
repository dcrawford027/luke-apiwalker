import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const People = props => {
    const [person, setPerson] = useState({})

    useEffect(() => {
        Axios.get(`https://swapi.dev/api/people/${props.id}`)
            .then(response => setPerson(response.data))
            .catch(err => console.log(err))
    }, [props.id]);

    return (
        <>
            <h1>{person.name}</h1>
            <p>Height: {person.height} cm</p>
            <p>Mass: {person.mass} kg</p>
            <p>Eye Color: {person.eye_color}</p>
            <p>Gender: {person.gender}</p>
        </>
    )
}

export default People;