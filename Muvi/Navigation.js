import React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { GetStarted } from './GetStarted';
import { Welcome } from './Welcome';
import { Splash } from './Splash';
import { Login } from './Login';
import { CreateAccount } from './CreateAccount';
import { Home } from './Home';
import { Search } from './search';
import { List } from './List';
import { Profile } from './Profile';
import { Details } from './Details';
import { EditProfile } from './EditProfile';
import Feather from "react-native-vector-icons/Feather";
import { DetailsTV } from './DetailsTV';
import { HeaderHome } from './Header';
import { View, ScrollView, Text } from 'react-native';
import { Adventure } from './Adventure';
import { AuthProvider } from './Authentication';
import { DrawerNavigator } from './DrawerNavigation';
import Fontisto from "react-native-vector-icons/Fontisto"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();


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

      <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
      <Stack.Screen name="DetailsTV" component={DetailsTV} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />


    </Stack.Navigator>

  );
};

const CustomHeader = () => {
  return (
    <View style={{ backgroundColor: '#1F2123', width: '100%', height: 'auto', paddingTop: 60, paddingBottom: 1, justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 15 }}>
      <View style={{ backgroundColor: '#1F2123', width: '100%', height: 'auto', justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
        <View style={{ backgroundColor: '#1F2123', display: 'flex', flexDirection: 'row', paddingLeft: 20, alignItems: 'center', gap: 5 }}>
          <View style={{ backgroundColor: '#F3B919', paddingHorizontal: 14, borderRadius: 5, alignItems: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: '900', color: '#22221F' }}>M</Text>
          </View>
          <Text style={{ color: '#FFFFFF', fontSize: 25, fontWeight: 'bold' }}>Muvi</Text>
        </View>

        <View style={{ backgroundColor: '#1F2123', gap: 20, width: 'auto', alignItems: 'center', paddingRight: 20, display: 'flex', flexDirection: 'row', paddingBottom: 7, paddingTop: 6, justifyContent: 'flex-end' }}>
          <Feather name="bookmark" style={{ color: '#ECEEF0', fontSize: 20 }} />
          <Fontisto name="bell" style={{ color: '#ECEEF0', fontSize: 20 }} />
        </View>
      </View>
    </View>
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
          } else if (route.name === 'Profile1') {
            iconName = 'grid';
          }

          return <Feather name={iconName} style={{ fontSize: 26, color: focused ? '#D9BE52' : '#CACCCE' }} />;
        },

        tabBarStyle: {
          backgroundColor: '#1F2123',
          borderTopColor: '#1F2123',
        },

        tabBarShowLabel: false,
        
        header: () => {
          if (route.name === 'Home1') {
            return <CustomHeader />;
          } else {
            return null;
          }
        },
      })}
    >
      <Tab.Screen name="Home1" component={TopNavigator} />
      <Tab.Screen name="Search1" component={Search} options={{ headerShown: false }} />
      <Tab.Screen name="List1" component={List} options={{ headerShown: false }} />
      <Tab.Screen name="Profile1"  component={DrawerNavigator}  options={{ headerShown: false }} /> 

    </Tab.Navigator>
  );
};



export const TopNavigator = () => {
  return (
    <Top.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#D9BE52',
      tabBarInactiveTintColor: '#CACCCE', 
      tabBarScrollEnabled: true, 
      tabBarItemStyle: { width: 120, },
      tabBarIndicatorStyle: { backgroundColor: '#D9BE52',},
      tabBarStyle: { backgroundColor: '#1F2123',},
    }}
    >
      <Top.Screen name="Featured" component={Home} options={{ headerShown: false }} />
      <Top.Screen name="Action" component={Adventure} options={{ headerShown: false }} />
      <Top.Screen name="Crime" component={Adventure} options={{ headerShown: false }} />
      <Top.Screen name="Crimee" component={Adventure} options={{ headerShown: false }} />
      <Top.Screen name="Crim" component={Adventure} options={{ headerShown: false }} />
      <Top.Screen name="Cri" component={Adventure} options={{ headerShown: false }} />
      <Top.Screen name="Crimed" component={Adventure} options={{ headerShown: false }} />
      <Top.Screen name="Crimer" component={Adventure} options={{ headerShown: false }} />
    </Top.Navigator>
  );
};


// export const DrawerNavigation = () => {
//   return (
//     <Drawer.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }}>
//       <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
//       <Drawer.Screen name="Search" component={Search} options={{ headerShown: false }} />
//       <Drawer.Screen name="List" component={List} options={{ headerShown: false }} />
//       <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
//     </Drawer.Navigator>
//   )
// }

export const Navigation = () =>  {
  return(
    <NavigationContainer>
    <AuthProvider>
      <MainNavigator />
    </AuthProvider>
  </NavigationContainer>
  )
}