import redux from 'redux';
import logo from './logo.svg';
import './App.css';
import { configureStore } from '@reduxjs/toolkit'


// const createStore = redux.createStore
const buy = 'buy';
function buycake(props){
  return{
    type: props,
    info: 'idk'
  }
}
const ini = {
  num : "okok"
}
const rootReducer = (state =  ini, action) => {
  // switch(action.type){
  //   case buy: return{
  //     ...state,
  //     num : state.num -1
  //   } 
  //   default: return state
  // }
  return state
}
// const store = createStore(reducer)
const store = configureStore({ reducer: rootReducer })

 store.subscribe (() => console.log("update: ", store.getState())) 

// console.log(store.)
// unsubscribe( )

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => store.dispatch(buycake("one"))}>

        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
