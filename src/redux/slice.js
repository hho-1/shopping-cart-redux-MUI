import { createSlice} from "@reduxjs/toolkit";
import products from '../helpers/data'
import { Alert, AlertTitle } from "@mui/material";




const initialState = {
    products: products,
    cartItems: [],
    //quantity: 0,
    total:0
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state, action) => {
            
            const product = state.products.find((item) => item.id === action.payload)

            if(!(state.cartItems.some((cartItem) => cartItem.id === product.id))){
            
                //product.quantity += 1;
                state.cartItems.push({...product, quantity : 1} )
                 
                
            }
            else{
                {/* <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    You have <strong>already added</strong> this product to the cart!
                </Alert> */}
                alert("You have already added this product to the cart!")
            }
            
        },
    
        clearCart:(state) => {
            state.cartItems = [];
            products.quantity = 0
        },
        removeItem: (state, action) => {
            
            //const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            
        },
        increase:(state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            cartItem.quantity += 1;
        },
        decrease:(state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            cartItem.quantity -= 1;
        },
        calculateTotal:(state, action) => {
            let total = 0;
            let quantity = 0;
            state.cartItems.forEach((item) => { 
                total += item.quantity * item.price
                quantity += item.quantity
            })
            state.quantity = quantity;
            state.total = total;
        }
    }
})

export const {addToCart, clearCart, removeItem, increase, decrease, calculateTotal} = cartSlice.actions


export default cartSlice.reducer;