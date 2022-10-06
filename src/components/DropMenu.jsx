import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Link } from '@mui/material';
import { Link as LinkRouter } from 'react-router-dom';

function DropMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <Box sx={{
      py: 3, px: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}
    >
      <h1>Muhammad GUI</h1>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Dashboard
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>
            <Link underline="hover" to="/" component={LinkRouter}>
              Home
            </Link>

          </MenuItem>
          <MenuItem>
            <Link underline="hover" href="https://github.com/muhammad-ahmed02/GUI">
              GitHub
            </Link>

          </MenuItem>
          <MenuItem>
            <Link underline="hover" href="https://github.com/muhammad-ahmed02/GUI/blob/main/README.md">
              Docs
            </Link>
          </MenuItem>

          <MenuItem>
            <Link underline="hover" href="https://github.com/muhammad-ahmed02/GUI/blob/main/CONTRIBUTING.md">
              Contribute
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </Box>

  );
}

export default DropMenu;
