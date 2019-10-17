import React, { useReducer } from 'react';
import GlobalContext from './reducer/stateContext';
import setGlobalState from './action'; //good
import globalReducer from './reducer'; //good

const GlobalState = ({ children }) => {
  const [globalState, dispatch] = useReducer(globalReducer, { number: 3 });

  const test = () => {  //good
    dispatch(setGlobalState(5))
  }

  return  (
    <GlobalContext.Provider
      value={{
        globalState: globalState,
        setGlobalState: test
      }}
    >
      { children }
    </GlobalContext.Provider>
  )
}

export default GlobalState;