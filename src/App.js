
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AppRouter from './AppRouter';
import { calculateTotal } from './redux/slice';
import { useEffect} from 'react';


function App() {

  const {cartItems} = useSelector((store) => store.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems, dispatch])

  

  return (
    <div className="App">
      
        <AppRouter />
      
      
    </div>
  );
}

export default App;
