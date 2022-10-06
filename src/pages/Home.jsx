import React from 'react';
import { Box, Button, Container } from '@mui/material';

import Footer from '../components/Footer';
import ComponentList from '../components/ComponentsList';

function Home() {
  return (
    <>
      <Container sx={{ maxWidth: 1080 }}>
        <Box component="header" pt={15}>
          <Box sx={{ textAlign: 'center' }}>
            <Box component="h1" sx={{ fontSize: 60, mb: 5 }}>
              Muhammad GUI
            </Box>
            <p>
              This Reusable GUI is based on an idea to create templates in react
              for people to use them later in there projects.
            </p>
            <p>
              The Reuable GUI is the concept to reduse the development time in
              react projects. Here we would create some common pages which are
              mostly used in every other Website.
            </p>
            <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                href="https://github.com/muhammad-ahmed02/GUI"
              >
                GitHub
              </Button>
              <Button
                sx={{ ml: 3 }}
                variant="outlined"
                href="https://github.com/muhammad-ahmed02/GUI"
              >
                Contribute
              </Button>
            </Box>
          </Box>
        </Box>

        <Box component="section" sx={{ my: 15, textAlign: 'center' }}>
          <h2>Components</h2>
          <ComponentList />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
