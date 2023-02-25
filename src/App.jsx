import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout'
import Homepage from './pages/Homepage';
import PhotoResearch from './pages/PhotoResearch'
import GPACalc from './pages/GPACalc'
import Page404 from './pages/Page404';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './styles/style.css'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#374157',
      },
      'main-color': {
        main: "#5f6d89"
      },
      'main-lighter': {
        main: "#d1dddb"
      },
      'main-darker': {
        main: "#374157"
      },
      'second-color': {
        main: "#7f8fb0"
      },
      text: {
        datk: '374157',
        light: 'd1dddb',
      }
    },
    typography: {
      fontFamily: [
        'Baloo 2',
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index path="/" element={<Homepage />} />
            <Route path="photoResearch" element={<PhotoResearch />} />
            <Route path="gpaCalc" element={<GPACalc />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App;
