import { FC } from 'react'
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
// Local
import NutrientsList from './List'

const Header = () => (
  <>
    <Typography sx={{ m: 1 }} variant="h4">
      Missing Nutrients
    </Typography>
    <Typography sx={{ m: 1 }}>Select which nutrients you need.</Typography>
  </>
)

const NutrientsTable = () => (
  <PerfectScrollbar>
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <NutrientsList />
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

const NutrientsContainer: FC = () => (
  <Card>
    <Header />
    <br />
    <NutrientsTable />
    <PaginationBar />
  </Card>
)

export default NutrientsContainer
