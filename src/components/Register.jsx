import TextField from "@mui/material/TextField";

import "./Register.scss";
import useWindowDimensions from "./Dimension";
import Background from "../assets/background.jpg";

const Register = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div className="register-page">
      <div className="background">
        <img src={Background} alt="Background" width="60%" height={height} />
      </div>
      <div className="register-form">
        <form>
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
            />
          </div>
          <div className="form-group">
            <TextField
              required
              id="outlined-password-input"
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
