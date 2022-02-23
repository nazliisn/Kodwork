import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';
import initialState from './store';

function FavoriteProvider({children}) {
  const Store = createStore(reducer, initialState);
  return <Provider store={Store}>{children}</Provider>;
}

export default FavoriteProvider;
