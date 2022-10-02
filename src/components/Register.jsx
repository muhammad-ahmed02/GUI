import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./Register.scss";
import useWindowDimensions from "./Dimension";
// import Background from "../assets/background.jpg";
import { useState } from "react";
import { Card, Grid, Stack, Typography } from "@mui/material";

const Register = () => {
  const { height } = useWindowDimensions();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [cPassword, setCPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SIGNUP FORM SUBMITTED!");
  };

  return (
    <form
      className="register-page"
      onSubmit={handleSubmit}
      style={{ height: height, width: "100%" }}
    >
      <Card className="entity-form-card">
        <Stack spacing={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>Signup Form</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="filled"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Last Name"
                fullWidth
                variant="filled"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
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
              <TextField
                label="Confirm Password"
                variant="filled"
                type="password"
                fullWidth
                required
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Signup
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Card>
    </form>
  );
};

export default Register;
