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
  TextField,
  InputAdornment,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useQuery } from '@apollo/client'
// Local
import { NUM_FOODS } from 'API/foods'
import FoodsList from './List'
import { ITEMS_PER_PAGE } from '../constants'

const Header = () => (
  <>
    <Typography sx={{ m: 1 }} variant="h4">
      Foods
    </Typography>
    <Typography sx={{ m: 1 }}>
      Check off the foods you have eaten today.
    </Typography>
  </>
)

const SearchBar = () => (
  <TextField
    fullWidth
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
    placeholder="Start typing an ingredient"
    variant="outlined"
  />
)

interface IFoodsTableProps {
  page: number
}

const FoodsTable: FC<IFoodsTableProps> = ({ page }) => (
  <PerfectScrollbar>
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>&nbsp;</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <FoodsList page={page} />
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
  const { loading, error, data } = useQuery(NUM_FOODS)

  if (loading || error) return null

  const pageCount = Math.ceil(data.numFoods / ITEMS_PER_PAGE)

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

const FoodsContainer = () => {
  const [page, setPage] = useState(1)
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <Card>
      <Header />
      <br />
      <SearchBar />
      <br />
      <br />
      <FoodsTable page={page} />
      <PaginationBar page={page} handlePageChange={handlePageChange} />
    </Card>
  )
}

export default FoodsContainer
