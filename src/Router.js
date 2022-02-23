import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Jobs from './pages/Jobs';
import FavoriteJobs from './pages/FavoriteJobs';
import StackNavigator from './StackNavigator';
import FavoriteProvider from './context/FavoriteProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function Router() {
  const icon = IconName => {
    return <Icon name={IconName} size={20}></Icon>;
  };
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="StackNavigator"
            component={StackNavigator}
            options={{
              headerShown: false,
              title: 'Jobs',

              tabBarIcon: () => icon('head-plus'),
            }}
          />
          <Tab.Screen
            name="FavoriteJobsPage"
            component={FavoriteJobs}
            options={{
              title: 'Favorite Jobs',
              tabBarIcon: () => icon('heart-settings'),
              headerTitleAlign: 'center',
            }}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </FavoriteProvider>
  );
}
export default Router;
