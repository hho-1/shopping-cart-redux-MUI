import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { decrease, increase, removeItem } from '../redux/slice';

const ShowCart = ({id, title, price, image, quantity}) => {
    

    const dispatch = useDispatch()

    const handleDecrease = () => {
        if(quantity > 0){
          dispatch(decrease(id))
          if(quantity === 1){
            dispatch(removeItem(id))
          }
        }
    }

    return (
      <Grid item={true} sm={12} md={6} lg={4} className='productGrid'>
      <Card className='card' sx={{ height:'650px', maxWidth:'370px', marginTop:'40px'}}>
        <CardMedia
          sx={{ height: '400px', maxWidth:'300px', objectFit:'fill', marginLeft:'22px'}}
          image={image}
          title="productImage"
        />
        <CardContent>
          <Typography component={'span'} sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <Typography gutterBottom variant="h6" component="div">
                  {title}
              </Typography>
              <Typography gutterBottom variant="h6" component="div" sx={{color:'red'}}>
                  ${price}
              </Typography>
          </Typography>
          
          <CardActions className='CartBottomCard' sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}} variant="body2" color="text.secondary">
              <div className='increaseDecreaseButtons'>
                <Button size="large" onClick={()=>{dispatch(increase(id))}}><AddIcon/></Button>
                <p>{quantity}</p>
                <Button size="large" onClick={handleDecrease}><RemoveIcon/></Button>
              </div>
              <Button onClick={()=>dispatch(removeItem(id))} className='removeItemButton' variant='contained' color='error'>REMOVE</Button>
  
          </CardActions>
        </CardContent>
        
      </Card>
      </Grid>
    )
}

export default ShowCart