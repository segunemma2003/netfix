import Button from '@mui/material/Button';
import Router from 'next/router';
import Menu from '@mui/material/Menu';
import { FaBars } from 'react-icons/fa';
import MenuItem from '@mui/material/MenuItem';
import { useState, MouseEvent } from 'react';

function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="md:!hidden">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="!capitalize !text-white"
      >
        <FaBars className="w-6 h-6" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="menu"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => { Router.push('/'); handleClose(); }}>Home</MenuItem>
        <MenuItem onClick={() => { Router.push('/search'); handleClose(); }}>Search</MenuItem>
        <MenuItem onClick={() => { Router.push('/tv'); handleClose(); }}>TV Shows</MenuItem>
        <MenuItem onClick={() => { Router.push('/movies'); handleClose(); }}>Movies</MenuItem>
        <MenuItem onClick={() => { Router.push('/new'); handleClose(); }}>New & Popular</MenuItem>
        <MenuItem onClick={() => { Router.push('/mylist'); handleClose(); }}>My List</MenuItem>
      </Menu>
    </div>
  );
}

export default BasicMenu;
