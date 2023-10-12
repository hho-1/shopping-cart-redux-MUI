import { AppBar, Badge, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const {quantity} = useSelector((store) => store.cart)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className='navLink'>Fake Online Market</Link>
          </Typography>
          <Link to="/cart" className='navLink rightNav'>
            {/* <ShoppingCartOutlinedIcon className='items-icon'/>
            <p className='quantity-number'>{quantity}</p> */}
            <Badge badgeContent={quantity} color='secondary' className='shoppingCartNavbar'>
              <ShoppingCartOutlinedIcon/>
            </Badge>
          </Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
