import { Grid } from '@mui/material'
// Local
import { FullWidthLayout } from 'Components/Simple/Layout/FullWidthLayout'
import Foods from './Components/Foods'
import Nutrients from './Components/Nutrients'

const Dashboard = () => {
  return (
    <FullWidthLayout>
      <Grid item lg={6} md={6} xl={6} xs={12}>
        <Foods />
      </Grid>
      <Grid item lg={6} md={6} xl={6} xs={12}>
        <Nutrients />
      </Grid>
    </FullWidthLayout>
  )
}

export default Dashboard
