import { gql } from '@apollo/client'
// Local
import { TGraphQLQuery } from './types'

export const fetchFoods: TGraphQLQuery = async (client) => {
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

export const NUM_FOODS = gql`
  query GetNumFoods {
    numFoods
  }
`
