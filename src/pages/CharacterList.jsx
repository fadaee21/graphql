import React from 'react'
import { CircularProgress } from '@mui/material'
import { AlertTitle } from '@mui/material'
import { Alert } from '@mui/material'
import { useCharacters } from '../hooks/useCharacters'
import { Link } from 'react-router-dom'
export const CharacterList = () => {

    const { loading, data, error } = useCharacters()

    if (loading) {
        return <CircularProgress />
    }
    if (error) {
        return <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
        </Alert>
    }
    const { results } = data.characters
    console.log(results)
    return (
        <div className='char'>
            {results.map(character => {
                const { name, id, image } = character
                return <div key={id} className='element' >
                    <img src={image} alt="ricky" />
                    <Link to={id}  ><h3>{name}</h3></Link>
                </div>
            })}
        </div>
    )
}
