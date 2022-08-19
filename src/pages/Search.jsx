import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { gql, useLazyQuery } from '@apollo/client'

const GET_CHARACTER_EPISODES = gql`
query GetCharacterEpisode($name: String!) {
    episodes(filter: { name: $name}) {
      results {
        characters {
          name
        }
      }
    }
  }
`
export const Search = () => {
  const [name, setName] = useState("")
  const [getLocations, { called, loading, error, data }] = useLazyQuery(
    GET_CHARACTER_EPISODES, {
    variables: {
      name
    }
  })
  console.log({ called, loading, error, data })
  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined"
        onChange={e => setName(e.target.value)} value={name} />
      <span style={{ margin: "20px" }} ><Button variant="contained"
        onClick={() => getLocations()}>Search</Button></span>

    </div>
  )
}
