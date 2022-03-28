import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';

const LandingPage = () => {
  return (
    <Router>
    <div className='container'>
      <div className='landing-cover'>
        <div className='serachbar'>
        <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '40ch' }}>
        <OutlinedInput placeholder="Search" />
      </FormControl>
    </Box>
        </div>
        <div className='buttons'>
          <Button className='buttons buttons1' variant="outlined">Renters</Button>
          <Button className='buttons buttons2' variant="contained">Tenants</Button>
        </div>
      </div>
    </div>
    </Router>
  )
}

export default LandingPage