import { Checkbox, TableCell, TableRow } from '@mui/material'
import { useQuery } from '@apollo/client'
// Local
import { FOOD_NAMES } from 'API/foods'
import LoadingIndicator from 'Components/LoadingIndicator'
import ErrorMessage from 'Components/ErrorMessage'
import { ITEMS_PER_PAGE } from '../constants'

interface Food {
  id: string
  name: string
}

const Foods = () => {
  const take = ITEMS_PER_PAGE
  const skip = 0
  const { loading, error, data } = useQuery(FOOD_NAMES, {
    variables: {
      take,
      skip,
    },
  })

  if (loading)
    return (
      <TableRow>
        <TableCell colSpan={2}>
          <LoadingIndicator />
        </TableCell>
      </TableRow>
    )

  if (error) {
    return (
      <TableRow>
        <TableCell colSpan={2}>
          <ErrorMessage>{error.message ?? 'Error loading data'}</ErrorMessage>
        </TableCell>
      </TableRow>
    )
  }

  return data.foods.map((item: Food) => (
    <TableRow hover key={item.id}>
      <TableCell padding="checkbox">
        <Checkbox checked={false} onChange={() => null} value="false" />
      </TableCell>
      <TableCell>{item.name}</TableCell>
    </TableRow>
  ))
}

export default Foods
