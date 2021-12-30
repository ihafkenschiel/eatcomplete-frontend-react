import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
// Local
import { fetchNutrients } from 'API/nutrients'
import { FullWidthLayout } from 'Components/Layout/FullWidthLayout'
import { FindFoods } from './Components/FindFoods'
import { Nutrients } from './Components/Nutrients'

const Dashboard = ({ client }) => {
  const [nutrients, setNutrients] = useState([])

  useEffect(() => {
    fetchNutrients().then((data) => setNutrients(data))
  }, [])

  return (
    <FullWidthLayout>
      <Grid item lg={6} md={6} xl={6} xs={12}>
        <FindFoods client={client} />
      </Grid>
      <Grid item lg={6} md={6} xl={6} xs={12}>
        <Nutrients nutrients={nutrients} />
      </Grid>
    </FullWidthLayout>
  )
}

export default Dashboard
