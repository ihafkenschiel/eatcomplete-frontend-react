import { fetchFoods } from 'API/foods'
import { fetchNutrients } from 'API/nutrients'

import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'

import { FullWidthLayout } from 'Components/Simple/Layout/FullWidthLayout'
import { Ingredients } from './Components/Ingredients'
import { SelectNutrients } from './Components/SelectNutrients'

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
        <SelectNutrients nutrients={nutrients} />
      </Grid>
      <Grid item lg={6} md={6} xl={6} xs={12}>
        <Ingredients foods={foods} />
      </Grid>
    </FullWidthLayout>
  )
}

export default Dashboard
