import { StatusBar } from 'expo-status-bar';
import { View,Text  } from 'react-native';
import { SignIn } from './screen/SignIn';
import { ShippingBilling } from './screen/ShippingBilling';
// import Sign from './Signin';

export default function App () {
  return (
    <View>
      {/* <Text>food</Text> */}
      <ShippingBilling/>
      {/* <SignIn/> */}
      {/* <Todo /> */}
    </View>
  );
}