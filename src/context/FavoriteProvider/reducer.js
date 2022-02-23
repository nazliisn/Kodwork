import React from 'react';
import {Alert} from 'react-native';

function useReducer(state, action) {
  switch (action.type) {
    case 'ADD_LIST':
      const {favoriteJob} = action.payload;
      const filter = state.favoriteList.find(
        item => item.id === favoriteJob.id,
      );

      if (filter) {
        Alert.alert('You have this favorite');
        return state;
      } else {
        const newList = [...state.favoriteList, favoriteJob];
        return {...state, favoriteList: newList};
      }

    case 'REMOVE_LIST':
      const {favoriteJobID} = action.payload;

      const filterid = state.favoriteList.filter(
        item => item.id !== favoriteJobID,
      );

      return {...state, favoriteList: filterid};

    default:
      return state;
  }
}
export default useReducer;
