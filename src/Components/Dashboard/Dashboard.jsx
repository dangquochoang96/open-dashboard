import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Dashboard = () => {
  
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard