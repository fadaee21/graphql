import { useQuery, gql } from "@apollo/client";
// to have dynamic hook you need id
const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacter = (id) => {
    //useQuery take 2 argument first for gql and second for variables
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });

  return {
    error,
    data,
    loading,
  };
};
