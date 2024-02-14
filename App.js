import { StatusBar } from 'expo-status-bar';
import { View,Text  } from 'react-native';
import { SignIn } from './screen/SignIn';
import { ShippingBilling } from './screen/ShippingBilling';
import { FourImages } from './images/FourImages';
import { Login } from './LoginRegister/Login';
// import Sign from './Signin';

export default function App () {
  return (
    <View>
      {/* <Text>food</Text> */}
      {/* <ShippingBilling/> */}
      {/* <SignIn/> */}
      {/* <FourImages/> */}
      {/* <Todo /> */}
      <Login/>
    </View>
  );
}