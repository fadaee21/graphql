import React from 'react'
import { gql, useLazyQuery } from '@apollo/client'

const POSTS_QUERY = gql`
  query($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        body
      }
      meta {
        totalCount
      }
    }
  }
`;

export const Post = () => {
  const [getPosts, { loading, error, data }] = useLazyQuery(POSTS_QUERY)

  const handleClick = () => getPosts({
    variables: {
      options: {
        paginate: {
          limit: 5,
          page: 0
        }
      }
    }
  })
  if (loading) {return "loading..."  }
  if (error) {return error.message}
  return (
    <div>
      <button onClick={handleClick} >fetch</button>
      {data?.posts.data.map(({ id, body }) => {
          return <div key={id} >{body}</div>
        })}</div>)}
