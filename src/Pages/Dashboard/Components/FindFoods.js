import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Box,
  Button,
  Card,
  Checkbox,
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

export const FindFoods = ({ foods }) => (
  <Card>
    <Typography sx={{ m: 1 }} variant="h4">
      Foods
    </Typography>
    <Typography sx={{ m: 1 }}>
      Check off the foods you have eaten today.
    </Typography>
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
              <TableCell>&nbsp;</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {foods.map((foodItem) => (
              <TableRow hover key={foodItem.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={false}
                    onChange={() => null}
                    value="false"
                  />
                </TableCell>
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
