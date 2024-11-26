import { useSelector,useDispatch } from 'react-redux';
import { actions } from './store';
import './App.css';

function App() {
  const cash = useSelector((state)=>state.cash)
  return (
    <div>
      <h1>Cash App</h1> 
      <h2>{cash}</h2>
    </div>
  );
}

export default App;
