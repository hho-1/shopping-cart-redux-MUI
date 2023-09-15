import { Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Show from './Show'

const Categories = () => {

    const [buttonName, setButtonName] = useState('all')
    const [isFiltered, setIsFiltered] = useState(false)

    const {products} = useSelector((store) => store.cart)

  const handleButtonName = (e) => {
      setButtonName(e.target.value)

      setIsFiltered(true)   
  }
  return (
    <div >
        <FormControl>
      
            <RadioGroup
                sx={{marginTop:'40px', marginBottom:'40px', marginLeft:'240px'}}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel onClick={()=> setIsFiltered(false)} value="all" control={<Radio />} label="All" />
                <FormControlLabel onClick={handleButtonName} value="electronics" control={<Radio />} label="Electronics" />
                <FormControlLabel onClick={handleButtonName} value="jewelery" control={<Radio />} label="Jewelery" />
                <FormControlLabel onClick={handleButtonName} value="men's clothing" control={<Radio />} label="Men's clothing" />
                <FormControlLabel onClick={handleButtonName} value="women's clothing" control={<Radio />} label="Women's clothing" />
        
            </RadioGroup>
        </FormControl>
        <Container>
        <Grid className='cartContainerGrid cont' container rowSpacing={3} columnSpacing={{ sm: 2, md: 3, lg: 3 }}>
          {
            isFiltered ? (
              products.filter((product) => {
                return product.category === buttonName;
              }).map((filteredProduct, index) => {return <Show key={index} {...filteredProduct}/>})
            ) : (
              products.map((product, index) => {
                
              return <Show key={index} {...product}/>
  
              })
            )
            
            
          }    
        </Grid>
      </Container>
    </div>
    
  )
}

export default Categories