import { FC } from 'react'
import { TableCell, TableRow } from '@mui/material'
import { useQuery } from '@apollo/client'
// Local
import { NUTRIENT_NAMES } from 'API/nutrients'
import LoadingIndicator from 'Components/Simple/LoadingIndicator'
import ErrorMessage from 'Components/ErrorMessage'
import { ITEMS_PER_PAGE } from '../constants'

interface Nutrient {
  id: string
  name: string
}
interface INutrientsProps {
  page: number
}

const Nutrients: FC<INutrientsProps> = ({ page }) => {
  const take = ITEMS_PER_PAGE
  const skip = (page - 1) * ITEMS_PER_PAGE

  const { loading, error, data } = useQuery(NUTRIENT_NAMES, {
    variables: {
      take,
      skip,
    },
  })

  if (loading) return <LoadingIndicator />

  if (error) {
    return <ErrorMessage>{error.message ?? 'Error loading data'}</ErrorMessage>
  }

  return data.nutrients.map((item: Nutrient) => (
    <TableRow hover key={item.id}>
      <TableCell>{item.name}</TableCell>
    </TableRow>
  ))
}

export default Nutrients
