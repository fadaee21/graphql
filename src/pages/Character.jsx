import React from 'react'
import { useParams } from 'react-router-dom'
import { useCharacter } from '../hooks/useCharacter'
import { CircularProgress } from '@mui/material'
import { AlertTitle } from '@mui/material'
import { Alert } from '@mui/material'

export const Character = () => {
    const { id } = useParams()
    const { data, loading, error } = useCharacter(id)


    if (loading) {
        return <CircularProgress />
    }
    if (error) {
        return <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
        </Alert>
    }

    const { name, image, episode } = data.character
    // console.log(episode)
    return (
        <div className='page' >
            <img className='img' src={image} alt={name} />
            <div>
            <h3>{name}</h3>
            {episode.map((e,i) => {
                return <h5 key={i} >{e.name}</h5>
            })}
            </div>
        </div>
    )
}
