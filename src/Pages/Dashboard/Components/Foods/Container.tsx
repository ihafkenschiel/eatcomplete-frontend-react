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
import FoodsList from './List'

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

const FoodsTable = () => (
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
          <FoodsList />
        </TableBody>
      </Table>
    </Box>
  </PerfectScrollbar>
)

const PaginationBar = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      p: 2,
    }}
  >
    <Pagination count={10} color="primary" />
  </Box>
)

const FoodsContainer = () => (
  <Card>
    <Header />
    <br />
    <SearchBar />
    <br />
    <br />
    <FoodsTable />
    <PaginationBar />
  </Card>
)

export default FoodsContainer
