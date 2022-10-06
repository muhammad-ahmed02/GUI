import { Box, Link, Stack } from '@mui/material';
import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

function Navbar() {
  return (
    <Box sx={{
      py: 3, px: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}
    >
      <h1>Muhammad GUI</h1>
      <Stack direction="row" spacing={2}>
        <Link underline="hover" to="/" component={LinkRouter}>
          Home
        </Link>
        <Link underline="hover" href="https://github.com/muhammad-ahmed02/GUI">
          GitHub
        </Link>
        <Link underline="hover" href="https://github.com/muhammad-ahmed02/GUI/blob/main/README.md">
          Docs
        </Link>
        <Link underline="hover" href="https://github.com/muhammad-ahmed02/GUI/blob/main/CONTRIBUTING.md">
          Contribute
        </Link>
      </Stack>
    </Box>
  );
}

export default Navbar;
