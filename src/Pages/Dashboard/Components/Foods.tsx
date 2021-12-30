import { Checkbox, TableCell, TableRow } from '@mui/material'
import { useQuery } from '@apollo/client'
import { FOOD_NAMES } from 'API/foods'

interface Food {
  id: string
  name: string
}

const Foods = () => {
  const { loading, error, data } = useQuery(FOOD_NAMES)
  if (loading) return <p>Loading...</p>
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
