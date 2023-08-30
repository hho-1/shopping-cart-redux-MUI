import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice';

const Show = ({id, title, price, category, image}) => {

    const dispatch = useDispatch()
   /* const [isClicked, setIsClicked] = useState(false)
    

     const handleAddToCart = () => {
      dispatch(addToCart(id))
      setIsClicked(true)
    } */

  return (
    <Grid sm={12} md={6} lg={4} className='productGrid'>
    <Card className='card' sx={{ height:'650px', maxWidth:'370px' }}>
      <CardMedia
        sx={{ height: '400px', maxWidth:'300px', objectFit:'fill', marginLeft:'35px'}}
        image={image}
        title="productImage"
      />
      <CardContent>
        <Typography sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Typography gutterBottom variant="h6" component="div">
                {title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div" sx={{color:'red'}}>
                ${price}
            </Typography>
        </Typography>
        
        <Typography  className='cardBottom' sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}} variant="body2" color="text.secondary">
            <Typography gutterBottom variant="h6" component="div">
                {category}
            </Typography>
            <CardActions className='addToCartButton'>
              <Button size="medium" onClick={()=>dispatch(addToCart(id))}><AddShoppingCartIcon/></Button>
            </CardActions>

        </Typography>
      </CardContent>
      
    </Card>
    </Grid>
  )
}

export default Show