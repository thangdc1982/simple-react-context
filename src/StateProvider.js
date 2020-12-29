import React, { createContext, useContext, useReducer } from 'react';
import reducer from './Reducer';

export const initialState = {
  basket: [] // State of the current shooping basket
};

export const StateContext = createContext(initialState);
const { Provider } = StateContext;

export const StateProvider = ({children}) => {   
  return <Provider value={useReducer(reducer, initialState)}>{children}</Provider>
};

export const useStateValue = () => useContext(StateContext);