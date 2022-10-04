import { Button, Grid } from "@mui/material"
import { Link } from "react-router-dom"

const componentList = () => {
  return (

          <Grid
            container
            spacing={2}
            columns={4}
            sx={{
              maxWidth: 780,
              margin: "0 auto",
            }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Button variant="outlined" component={Link} to="/login">
                Login
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" component={Link} to="/register">
                Register
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" component={Link} to="/newsletter">
                Newsletter
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                component={Link}
                to="/contact-us-section"
              >
                Contact us section
              </Button>
            </Grid>
          </Grid>
  )
}

export default componentList