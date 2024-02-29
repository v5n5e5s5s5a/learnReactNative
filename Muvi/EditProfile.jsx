import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, ActivityIndicator, Dimensions, SafeAreaView, Image, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { IconButton, TextInput } from "react-native-paper";
import { BottomNavigation, ListComponent } from "./Components";
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export const EditProfile = ({ navigation }) => {
    const height = Dimensions.get("screen")
    const width = Dimensions.get("screen")
    return (
        <View style={{ height: height, width: width, backgroundColor: '#25272A', }}>
            <StatusBar style="light" />
            {/* start of Header */}
            <View style={{ zIndex: 1, paddingTop: 50, backgroundColor: '#202123', }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15, paddingHorizontal: 20, paddingBottom: 10, }}>
                    <AntDesign name="arrowleft" size={25} color={'#E9D160'} onPress={() => navigation.navigate('Home')} />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', }}>Edit Profile</Text>
                </View>
            </View>
            {/* end of Header */}

            <ScrollView>
                <View style={{ backgroundColor: '#25272A', paddingHorizontal: 20, display: 'flex', flexDirection: 'column', paddingTop: 25, paddingBottom: 25, }}>

                    <View style={{ display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'flex-start', backgroundColor: 'transparent', width: 'auto', alignItems: 'center', }}>
                        <Image source={require('../assets/muviImages/profileImage1.jpg')} style={{ width: '25%', height: 90, borderRadius: 6, borderRadius: 50,}} />
                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', gap: 5, borderWidth: 3, borderColor: '#55575A', paddingHorizontal: 7, paddingVertical: 3, borderRadius: 5, }}>
                            <Feather name="edit" color={'#B9992D'} size={20} />
                            <Text style={{ fontSize: 13, color: '#C1C2C2', }}>Change Avatar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 165, backgroundColor: 'transparent', }}></View>

                    <Pressable style={{ width: '100%', height: 'auto', backgroundColor: '#FFD130', paddingVertical: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 5, }}>
                        <Text style={{ color: 'black', textAlign: 'center', }}>Save Changes</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}