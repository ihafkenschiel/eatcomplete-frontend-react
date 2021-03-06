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
} from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

export const SelectNutrients = ({ nutrients }) => (
  <Card>
    <Typography sx={{ m: 1 }} variant="h4">
      Missing Nutrients
    </Typography>
    <Typography sx={{ m: 1 }}>Select which nutrients you need.</Typography>
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
            {nutrients.map((nutrientItem) => (
              <TableRow hover key={nutrientItem.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={false}
                    onChange={() => null}
                    value="false"
                  />
                </TableCell>
                <TableCell>{nutrientItem.name}</TableCell>
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
