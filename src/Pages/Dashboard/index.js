import { fetchFoods } from 'API/foods'
import { fetchNutrients } from 'API/nutrients'

import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'

import { FullWidthLayout } from 'Components/Layout/FullWidthLayout'
import { FindFoods } from './Components/FindFoods'
import { Nutrients } from './Components/Nutrients'

const Dashboard = () => {
  const [foods, setFoods] = useState([])
  const [nutrients, setNutrients] = useState([])

  useEffect(() => {
    fetchFoods().then((data) => setFoods(data))
    fetchNutrients().then((data) => setNutrients(data))
  }, [])

  return (
    <FullWidthLayout>
      <Grid item lg={6} md={6} xl={6} xs={12}>
        <FindFoods foods={foods} />
      </Grid>
      <Grid item lg={6} md={6} xl={6} xs={12}>
        <Nutrients nutrients={nutrients} />
      </Grid>
    </FullWidthLayout>
  )
}

export default Dashboard
