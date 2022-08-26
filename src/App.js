
import './App.css';
import CounterFn from './components/CounterFn';
import CounterClass from './components/CounterClass';
import Stopwatch from './components/Stopwatch';
import { useSelector } from 'react-redux/es/exports';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  return (
    <div className="App">
    <div>These are states stored in redux store</div>
    <div>{counter}</div>
    <div>{isLogged ? "Logged in" : "Not signed in"}</div>
    </div>
  );
}

export default App;
