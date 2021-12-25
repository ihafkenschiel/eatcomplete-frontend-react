import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TextField,
  InputAdornment,
} from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import SearchIcon from '@mui/icons-material/Search'

export const Ingredients = ({ foods }) => (
  <Card>
    <Typography sx={{ m: 1 }} variant="h4">
      Ingredients
    </Typography>
    <Typography sx={{ m: 1 }}>Select what you have or will buy.</Typography>
    <br />
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
    <br />
    <br />
    <PerfectScrollbar>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {foods.map((foodItem) => (
              <TableRow hover key={foodItem.id}>
                <TableCell>{foodItem.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
)
