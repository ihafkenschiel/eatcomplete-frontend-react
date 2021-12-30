import { gql, ApolloClient, NormalizedCacheObject } from '@apollo/client'
// Local

export async function fetchNutrients(
  client: ApolloClient<NormalizedCacheObject>
) {
  const results = await client.query({
    query: gql`
      query GetNutrientNames {
        nutrients {
          name
        }
      }
    `,
  })

  return results
}

export const NUTRIENT_NAMES = gql`
  query GetNutrientNames {
    nutrients {
      name
    }
  }
`
