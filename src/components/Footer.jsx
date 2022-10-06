import React from 'react';
import {
  Box, Container, Grid, Link,
} from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ p: 5, backgroundColor: '#e5e5e5' }}>
      <Container sx={{ maxWidth: 768 }}>
        <Grid
          container
          spacing={3}
          columns={3}
          sx={{ margin: '0 auto', pr: 3 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid component="section" item>
            <Link underline="always" href="https://github.com/muhammad-ahmed02">GitHub Profile</Link>
          </Grid>
          <Grid component="section" item>
            <Link underline="always" href="https://github.com/muhammad-ahmed02/GUI">GitHub Repo</Link>
          </Grid>
          <Grid component="section" item>
            <Link underline="always" href="https://github.com/muhammad-ahmed02/GUI/blob/main/CONTRIBUTING.md">
              Contribute link
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
