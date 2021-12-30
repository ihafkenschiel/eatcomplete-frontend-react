import React, { FC, useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Box,
  Card,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { useQuery } from '@apollo/client'
// Local
import { NUM_NUTRIENTS } from 'API/nutrients'
import NutrientsList from './List'
import { ITEMS_PER_PAGE } from '../constants'

const Header = () => (
  <>
    <Typography sx={{ m: 1 }} variant="h4">
      Missing Nutrients
    </Typography>
    <Typography sx={{ m: 1 }}>Select which nutrients you need.</Typography>
  </>
)

interface INutrientsTableProps {
  page: number
}

const NutrientsTable: FC<INutrientsTableProps> = ({ page }) => (
  <PerfectScrollbar>
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <NutrientsList page={page} />
        </TableBody>
      </Table>
    </Box>
  </PerfectScrollbar>
)

interface IPaginationBarProps {
  page: number
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void
}

const PaginationBar: FC<IPaginationBarProps> = ({ page, handlePageChange }) => {
  const { loading, error, data } = useQuery(NUM_NUTRIENTS)

  if (loading || error) return null

  const pageCount = Math.ceil(data.numNutrients / ITEMS_PER_PAGE)

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Pagination
        count={pageCount}
        page={page}
        onChange={handlePageChange}
        color="primary"
        shape="rounded"
      />
    </Box>
  )
}

const NutrientsContainer: FC = () => {
  const [page, setPage] = useState(1)
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <Card>
      <Header />
      <br />
      <NutrientsTable page={page} />
      <PaginationBar page={page} handlePageChange={handlePageChange} />
    </Card>
  )
}

export default NutrientsContainer
