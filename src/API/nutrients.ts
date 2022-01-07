import { gql } from '@apollo/client'
// Local
import { TGraphQLQuery } from './types'

export const fetchNutrients: TGraphQLQuery = async (client) => {
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
  query GetNutrientNames($take: Int, $skip: Int) {
    nutrients(take: $take, skip: $skip) {
      name
    }
  }
`

export const NUM_NUTRIENTS = gql`
  query GetNumNutrients {
    numNutrients
  }
`
