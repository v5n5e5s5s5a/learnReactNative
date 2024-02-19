import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Octicons from "react-native-vector-icons/Octicons"
import Feather from "react-native-vector-icons/Feather"
import { TextInput, Icon, IconButton } from "react-native-paper";
import React from "react";
import { SearchClothesStyles } from "./SearchClothesStyles";

export const SearchClothes = () => {
    return (
        <View style={{flex:1, width:'100%', paddingHorizontal: '5%', paddingVertical: 20,}}>
            <StatusBar style="auto"/>
            <View style={SearchClothesStyles.top}>
                <IconButton icon={'arrow-left'} style={ SearchClothesStyles.leftArrow} />
                <IconButton icon={'arrow-left'} style={ SearchClothesStyles.leftArrow} />
                <Text style={ SearchClothesStyles.SearchWord}>Search</Text>
                <Text>Hello</Text>
            </View>
        </View>
    )
}