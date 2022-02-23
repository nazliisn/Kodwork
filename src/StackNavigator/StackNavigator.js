import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Jobs from '../pages/Jobs';
import Detail from '../pages/Detail';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerTintColor: 'red'}}>
      <Stack.Screen
        name="JobsPage"
        component={Jobs}
        options={{
          title: 'Jobs',

          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="DetailPage"
        component={Detail}
        options={{
          title: 'Jobs',
          headerTitleAlign: 'center',
          headerBackTitle: 'Jobs',
        }}
      />
    </Stack.Navigator>
  );
}
export default StackNavigator;
