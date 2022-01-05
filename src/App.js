// Modules
import { Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from 'Theme'
import { DashboardLayout } from 'Components/Composite/Navs/dashboard-layout'
// Local
import Dashboard from 'Pages/Dashboard'
import CreateMeal from 'Pages/CreateMeal'
import About from 'Pages/About'

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-meal" element={<CreateMeal />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </DashboardLayout>
      </ThemeProvider>
    </div>
  )
}

export default App
