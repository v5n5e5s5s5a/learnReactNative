import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GetStarted } from './GetStarted';
import { Welcome } from './Welcome';
import { Splash } from './Splash';
import { Login } from './Login';
import { CreateAccount } from './CreateAccount';
import { Home } from './Home';
import { Search } from './search';
import { List } from './List';
import { Profile } from './Profile';
import { Action } from './Action';
import { EditProfile } from './EditProfile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from "react-native-vector-icons/Feather";
import { ActionTV } from './ActionTV';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
  return (

    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />

      <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="List" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={TabNavigator} options={{ headerShown: false }} />

      <Stack.Screen name="Action" component={Action} options={{ headerShown: false }} />
      <Stack.Screen name="ActionTV" component={ActionTV} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
    </Stack.Navigator>

  );
};


export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home1') {
            iconName = 'home';
          } else if (route.name === 'Search1') {
            iconName = 'search';
          } else if (route.name === 'List1') {
            iconName = 'folder';
          }else if (route.name === 'Profile1') {
            iconName = 'grid';
          }

          return <Feather name={iconName} style={{ fontSize: 26, color: focused ? '#D9BE52' : '#CACCCE' }} />;
        },

        tabBarStyle: {
          backgroundColor: '#1F2123',
          borderTopColor: '#1F2123',
        },
        
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home1" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Search1" component={Search} options={{ headerShown: false }} />
      <Tab.Screen name="List1" component={List} options={{ headerShown: false }} />
      <Tab.Screen name="Profile1" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

