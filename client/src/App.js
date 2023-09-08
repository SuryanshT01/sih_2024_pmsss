import {CssBaseline,ThemeProvider} from '@mui/material'
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate,Routes,Route } from 'react-router-dom';
import { themeSettings } from 'theme';
import Dashboard from 'scenes/dashboard';
import Layout from 'scenes/layout';
import Overview from "scenes/overview"
import Calendar from "scenes/calendar"


function App() {
  const mode = useSelector((state)=>state.global.mode)
  const theme = useMemo(()=>createTheme((themeSettings(mode)),[mode]))
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to='/dashboard' replace />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/overview' element={<Overview />} />
              <Route path='/calendar' element={<Calendar />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
