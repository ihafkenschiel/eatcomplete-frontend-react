import { TableCell, TableRow } from '@mui/material'
import { useQuery } from '@apollo/client'
// Local
import { NUTRIENT_NAMES } from 'API/nutrients'
import LoadingIndicator from 'Components/LoadingIndicator'
import ErrorMessage from 'Components/ErrorMessage'

interface Nutrient {
  id: string
  name: string
}

const Nutrients = () => {
  const { loading, error, data } = useQuery(NUTRIENT_NAMES)
  if (loading) return <LoadingIndicator />
  if (error) return <ErrorMessage>Error loading data</ErrorMessage>

  return data.nutrients.map((item: Nutrient) => (
    <TableRow hover key={item.id}>
      <TableCell>{item.name}</TableCell>
    </TableRow>
  ))
}

export default Nutrients
