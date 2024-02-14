import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { TextInput, Checkbox, Icon } from "react-native-paper";
import { imageStyles } from "./FourImagesStyles";
import Octicons from "react-native-vector-icons/Octicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Entypo from "react-native-vector-icons/Entypo"

export const FourImages = () => {
    return (
        <View style={imageStyles.parent}>
            <StatusBar style="auto"/>
            <View style={imageStyles.nav}>
                <TouchableOpacity style={imageStyles.arrowTouch}>
                    <MaterialCommunityIcons name="arrow-left" style={imageStyles.leftArrow} />
                </TouchableOpacity>
                <Text style={imageStyles.txttoIamge}>Text to image</Text>
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" style={imageStyles.threeDots} />
                </TouchableOpacity>
            </View>

            <View style={imageStyles.images}>
                <Image source={require('../assets/1stGreenHouse.jpg')} style={imageStyles.photo} />
                <Image source={require('../assets/2ndGreenHouse.jpg')} style={imageStyles.photo} />
                <Image source={require('../assets/3rdGreenHouse.jpg')} style={imageStyles.photo} />
                <Image source={require('../assets/4thGreenHouse.jpg')} style={imageStyles.photo} />
            </View>
        </View>
    )
}