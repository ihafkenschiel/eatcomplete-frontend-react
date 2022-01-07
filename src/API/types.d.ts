import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloQueryResult,
} from '@apollo/client'

export type TGraphQLQuery = (
  client: ApolloClient<NormalizedCacheObject>
) => Promise<ApolloQueryResult<string>>
