import { TableCell, TableRow } from '@mui/material'
import { useQuery } from '@apollo/client'
import { NUTRIENT_NAMES } from 'API/nutrients'

interface Nutrient {
  id: string
  name: string
}

const Nutrients = () => {
  const { loading, error, data } = useQuery(NUTRIENT_NAMES)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.nutrients.map((item: Nutrient) => (
    <TableRow hover key={item.id}>
      <TableCell>{item.name}</TableCell>
    </TableRow>
  ))
}

export default Nutrients
