import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./Register.scss";
import useWindowDimensions from "./Dimension";
import Background from "../assets/background.jpg";
import { useState } from "react";

const Register = () => {
  const { height, width } = useWindowDimensions();
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  return (
    <div className="register-page">
      <div className="background">
        <img src={Background} alt="Background" width="100%" height={height} />
      </div>
      <div className="register-form">
        <form>
          <h2>Sign Up Form</h2>
          <div className="form-group">
            <TextField required id="outlined-required" label="First Name" />
          </div>
          <div className="form-group">
            <TextField required id="outlined-required" label="Last Name" />
          </div>
          <div className="form-group">
            <TextField required id="outlined-required" label="Email" />
          </div>
          <div className="form-group">
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <TextField
              required
              id="outlined-password-input"
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
              value={cPassword}
              onChange={(e) => {
                setCPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <Button className="btn" variant="outlined">Sign Up</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
