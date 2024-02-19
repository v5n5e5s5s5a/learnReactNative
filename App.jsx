import { StatusBar } from 'expo-status-bar';
import { View,Text  } from 'react-native';
import { SignIn } from './screen/SignIn';
import { ShippingBilling } from './screen/ShippingBilling';
import { FourImages } from './images/FourImages';
import { Login } from './LoginRegister/Login';
import { Register } from './LoginRegister/Register';
import { Home } from './LoginRegister/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchClothes } from './Shopping/SearchClothes';
import 'react-native-gesture-handler'


export default function App (){
  return(
    <View>
    {/* <Text>Hello</Text> */}
    < SearchClothes/>
    
    </View>
  )
}

// const Stack = createStackNavigator();
// export default function App () {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
//         <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
//         <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//       // {/* <Text>food</Text> */}
//       // {/* <ShippingBilling/> */}
//       // {/* <SignIn/> */}
//       // {/* <FourImages/> */}
//       // {/* <Todo /> */}
//   );
// }

