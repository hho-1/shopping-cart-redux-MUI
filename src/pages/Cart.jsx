import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ShowCart from '../components/ShowCart'
import {clearCart } from '../redux/slice'

const Cart = () => {

    const {cartItems, total} = useSelector((store) => store.cart)

    const dispatch = useDispatch()


  return (
    <>
        {
            cartItems.length === 0 ? (
              <h2 className='emptyCartWarning'>Your shopping cart is empty. <Link to="/">Start adding something</Link></h2>
            ) 
            : 
            (
                <Container>
                    <Grid className='cartContainerGrid' container rowSpacing={3} columnSpacing={{ sm: 2, md: 3, lg: 3 }}>
                        {cartItems.map((product, index) => 
                
                        <ShowCart key={index} {...product}/>
  
                        )}
                    </Grid>
                    <div className='cartSummaryDiv'>
                        <Typography sx={{marginTop:'40px'}} variant='h2'>Subtotal: <span className='dolarIsareti'>$</span><span className='toplamTutar'>{total.toFixed(2)}</span></Typography>
                        <Button onClick={()=>dispatch(clearCart())} variant='contained' color='error' size='large'>EMPTY CART</Button>
                    </div>
                    
                </Container>
            )
            
            
        }    
    </>  
  )
}

export default Cart