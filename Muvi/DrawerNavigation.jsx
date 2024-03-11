import { createDrawerNavigator } from '@react-navigation/drawer'
import { Home } from './Home';
import { Search } from './search';
import { Profile } from './Profile';
import { List } from './List';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useAuth } from './Authentication';


const Drawer = createDrawerNavigator()
// const { data,lightMode, changeToLightMode } = useAuth();
const CustomDrawerContent = (props) => {
  const { data, lightMode, changeToLightMode } = useAuth();
  console.log(data);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Switch"
        icon={({ focused, color, size }) => (
          <MaterialCommunityIcons
            name={focused ? 'toggle-switch' : 'toggle-switch-off'}
            size={size}
            color={focused ? 'yellow' : '#CACCCE'}
          />
        )}
        onPress={() => { changeToLightMode() }}
      />
    </DrawerContentScrollView>
  );
};

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Profile'
      screenOptions={({ focused }) => ({
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#1F2123',
        },
        drawerLabelStyle: {
          color: focused ? 'yellow' : '#CACCCE',
        },
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="List" component={List} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  )
}