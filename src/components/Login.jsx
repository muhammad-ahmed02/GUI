import React, { useState } from 'react';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';
import './Register.scss';
// import Background from '../assets/background.jpg';
import {
  Card, Grid, Stack, Typography,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import useWindowDimensions from './Dimension';

function Login() {
  const { height } = useWindowDimensions();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setName] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('LOGIN FORM SUBMITTED!');
  };

  return (
    <form
      className="register-page"
      onSubmit={handleSubmit}
      style={{
        height, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
    >
      <Card className="entity-form-card" style={{ borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(20px)' }}>
        <Stack
          spacing={3}
          style={{
            width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}
        >
          <Grid
            container
            spacing={3}
            style={{
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10px',
            }}
          >
            <Grid item xs={12}>
              <Typography variant="h4" style={{ fontFamily: '"Acme", sans-serif', color: '#195190ff' }}>Login</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ position: 'relative', display: 'flex' }}
            >
              <Paper
                component="form"
                elevation={4}
                sx={{
                  p: '7px 6px', display: 'flex', alignItems: 'center', width: 400, backgroundColor: 'rgba(255,255,255,0.7)',
                }}
              >
                <PersonIcon />
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter your name"
                  inputProps={{ 'aria-label': 'enter your name' }}
                  value={username}
                  type="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ position: 'relative', display: 'flex' }}
            >
              <Paper
                component="form"
                elevation={4}
                sx={{
                  p: '7px 6px', display: 'flex', alignItems: 'center', width: 400, backgroundColor: 'rgba(255,255,255,0.7)',
                }}
              >
                <EmailIcon />
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter your email"
                  inputProps={{ 'aria-label': 'enter your email' }}
                  value={email}
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ position: 'relative', display: 'flex' }}
            >
              <Paper
                component="form"
                elevation={4}
                sx={{
                  p: '7px 6px', display: 'flex', alignItems: 'center', width: 400, backgroundColor: 'rgba(255,255,255,0.7)',
                }}
              >
                <LockIcon />
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter your password"
                  inputProps={{ 'aria-label': 'enter your password' }}
                  value={password}
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Paper>
            </Grid>
            <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h4" style={{ fontFamily: 'cursive', fontSize: '24px', textAlign: 'center' }}>or</Typography>
              <Typography variant="h6" style={{ fontFamily: 'cursive', fontSize: '16px', textAlign: 'center' }}> Login with</Typography>
              <Grid item>
                <IconButton>
                  <GoogleIcon className="brand_icon" />
                </IconButton>
                <IconButton>
                  <FacebookIcon className="brand_icon" />
                </IconButton>
                <IconButton>
                  <GitHubIcon className="brand_icon" />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                className="login_btn"
                type="submit"
                variant="contained"
                style={{
                  width: 300, backgroundColor: '#195190ff', fontFamily: '"Acme", sans-serif', borderRadius: '15px', cursor: 'pointer',
                }}
              >
                Login
              </Button>
            </Grid>
            <Grid item>
              <Typography style={{ fontFamily: 'cursive', fontSize: '14px', textAlign: 'center' }}>
                Don&apos;t have an account?
                <NavLink to="/register" style={(isActive) => ({ color: isActive ? '#d45' : '#195190ff' })}>Sign Up</NavLink>
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Card>
    </form>
  );
}

export default Login;
