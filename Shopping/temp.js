import { StatusBar } from 'expo-status-bar';
import {Text, View,Button,TouchableOpacity,ActivityIndicator, ScrollView} from 'react-native';
import { styles } from './style';
import {Shipping_billing} from './screen/shipping_billing';
import Sigin_screen from './screen/sigin_screen';
import Card from './screen/Card';

export default function Temp() {
  const data = [
    {
      id: 1,
      image: 'https://static.cnews.fr/sites/default/files/styles/image_750_422/public/pacifique_illustr_60634b8a5b366.jpeg?itok=B8z1olAf',
      title: 'Gucci',
      price: 1000
    },
    {
      id: 2,
      image: 'https://static.cnews.fr/sites/default/files/styles/image_750_422/public/pacifique_illustr_60634b8a5b366.jpeg?itok=B8z1olAf',
      title: 'Nike ',
      price: 1000
    },
    {
      id: 3,
      image: 'https://static.cnews.fr/sites/default/files/styles/image_750_422/public/pacifique_illustr_60634b8a5b366.jpeg?itok=B8z1olAf',
      title: 'adidas',
      price: 1000
    }
  ]
  const url = "https://static.cnews.fr/sites/default/files/styles/image_750_422/public/pacifique_illustr_60634b8a5b366.jpeg?itok=B8z1olAf"
  return (
   <View>
     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((item,index)=>{
        return(
          <View style={{margin:3}}>
        <Card key={index} title={item.title} image={item.image} price={item.price} />
          </View>
        )
      })}
      <Text style={{fontSize:90}}>{data.length}</Text>
     </ScrollView>
   </View>
  )
}