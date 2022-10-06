import React, { useState } from 'react';
import Button from '@mui/material/Button';
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
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import useWindowDimensions from './Dimension';

function Register() {
  const { height } = useWindowDimensions();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [cPassword, setCPassword] = useState(null);
  const [mobileNumber, setNumber] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('SIGNUP FORM SUBMITTED!');
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
        <Stack spacing={3}>
          <Grid container spacing={3} style={{ padding: '15px' }}>
            <Grid item xs={12}>
              <Typography variant="h4" style={{ fontFamily: '"Acme", sans-serif', color: '#195190ff', textAlign: 'center' }}>Create Account</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
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
                  placeholder="Enter your first name"
                  inputProps={{ 'aria-label': 'enter your first name' }}
                  value={firstName}
                  type="name"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
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
                  placeholder="Enter your last name"
                  inputProps={{ 'aria-label': 'enter your last name' }}
                  value={lastName}
                  type="name"
                  required
                  onChange={(e) => setLastName(e.target.value)}
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
                  p: '7px 6px', display: 'flex', alignItems: 'center', width: '100%', backgroundColor: 'rgba(255,255,255,0.7)',
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
                  p: '7px 6px', display: 'flex', alignItems: 'center', width: '100%', backgroundColor: 'rgba(255,255,255,0.7)',
                }}
              >
                <PhoneIcon />
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter your Mobile number"
                  inputProps={{ 'aria-label': 'enter your mobile number' }}
                  value={mobileNumber}
                  type="number"
                  required
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
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
            <Grid
              item
              xs={12}
              md={6}
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
                  placeholder="Re-enter your password"
                  inputProps={{ 'aria-label': 'Re-enter your password' }}
                  value={cPassword}
                  type="password"
                  required
                  onChange={(e) => setCPassword(e.target.value)}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} style={{ width: '100%', textAlign: 'center' }}>
              <Button
                className="signup_btn"
                type="submit"
                variant="contained"
                style={{
                  width: 300, backgroundColor: '#195190ff', fontFamily: '"Acme", sans-serif', borderRadius: '15px', cursor: 'pointer',
                }}
              >
                Create Account
              </Button>
            </Grid>
            <Grid
              item
              style={{
                width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <Typography variant="h4" style={{ fontFamily: 'cursive', fontSize: '24px', textAlign: 'center' }}>or</Typography>
              <Typography variant="h6" style={{ fontFamily: 'cursive', fontSize: '16px', textAlign: 'center' }}>Create account with</Typography>
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
            <Grid item style={{ width: '100%', textAlign: 'center' }}>
              <Typography style={{ fontFamily: 'cursive', fontSize: '14px', textAlign: 'center' }}>
                Already have an account?
                <NavLink to="/login" style={(isActive) => ({ color: isActive ? '#d45' : '#195190ff' })}>Sign In</NavLink>
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Card>
    </form>
  );
}

export default Register;
