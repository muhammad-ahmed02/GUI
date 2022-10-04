import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import './Register.scss'
import useWindowDimensions from './Dimension'
// import Background from "../assets/background.jpg";
import { Card, Grid, Stack, Typography } from '@mui/material'

const Login = () => {
  const { height } = useWindowDimensions()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('LOGIN FORM SUBMITTED!')
  }

  return (
    <form
      className="register-page"
      onSubmit={handleSubmit}
      style={{ height, width: '100%' }}
    >
      <Card className="entity-form-card">
        <Stack spacing={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>Login Form</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                variant="filled"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                variant="filled"
                type="password"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Card>
    </form>
  )
}

export default Login
