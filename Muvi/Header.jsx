import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, ImageBackground, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IconButton, TextInput } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto"

//start of header component
export const HeaderHome = ({genre}) => {

    return (
        <TouchableOpacity style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
            <Text style={{ fontSize: 16, color: '#FCCF33', }}>{genre}</Text>
            <View style={{ backgroundColor: '#FCCF33', height: 4, width: '75%', borderRadius: 15, }}></View>
        </TouchableOpacity>
    )
}
//end of header component