import { Checkbox, TableCell, TableRow } from '@mui/material'
import { useQuery } from '@apollo/client'
// Local
import { FOOD_NAMES } from 'API/foods'
import LoadingIndicator from 'Components/LoadingIndicator'

interface Food {
  id: string
  name: string
}

const Foods = () => {
  const { loading, error, data } = useQuery(FOOD_NAMES)
  if (loading)
    return (
      <TableRow>
        <TableCell colSpan={2}>
          <LoadingIndicator />
        </TableCell>
      </TableRow>
    )
  if (error) return <p>Error :(</p>

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
