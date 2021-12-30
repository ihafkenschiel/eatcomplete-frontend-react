import { gql, ApolloClient, NormalizedCacheObject } from '@apollo/client'

export async function fetchFoods(client: ApolloClient<NormalizedCacheObject>) {
  const results = await client.query({
    query: gql`
      query GetFoodNames {
        foods {
          name
        }
      }
    `,
  })

  return results
}

export const FOOD_NAMES = gql`
  query GetFoodNames($take: Int, $skip: Int) {
    foods(take: $take, skip: $skip) {
      name
    }
  }
`
