import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, ActivityIndicator, Dimensions, SafeAreaView, Image, Pressable, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { IconButton, TextInput } from "react-native-paper";
import { BottomNavigation, ListComponent } from "./Components";
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAuth } from "./Authentication";
import { CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Profile = ({ navigation }) => {
    const height = Dimensions.get("screen")
    const width = Dimensions.get("screen")
    const { logout } = useAuth();
    const { lightMode, changeToLightMode } = useAuth();
    
    const handleLogout = () => {
        logout();
        // navigation.navigate('Login');
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Login' }]
            })
        );
    };

    const handleOpenDrawer = () => {
        navigation.openDrawer();
    };

    const getData = async () => {
        let data = await AsyncStorage.getItem('user-data')
        console.log(data);
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <View style={{ height: height, width: width, backgroundColor: '#25272A', }}>
            <StatusBar style={lightMode ? 'light' : 'dark'} />
            {/* start of Header */}
            <View style={{ zIndex: 1, }}>
                <View style={{ backgroundColor:lightMode? '#1F2123': '#C2C3C3', width: '100%', height: 'auto', paddingTop: 50, paddingBottom: 15, justifyContent: 'space-between', alignItems: 'Flex-start', display: 'flex', flexDirection: 'column', gap: 15, paddingHorizontal: 20, }}>
                    <TouchableOpacity onPress={ handleOpenDrawer }>
                        <Text style={{ color: lightMode?'white':'black', fontSize: 25, fontWeight: 500, }}>More</Text>
                        
                    </TouchableOpacity>
                    {/* <Button title='change into light mode' onPress={()=>{changeToLightMode()}} /> */}
                    <View style={{ backgroundColor: 'transparent', }}></View>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'flex-start', }}>
                        <Image source={require('../assets/muviImages/profileImage1.jpg')} style={{ width: '20%', height: 70, borderRadius: 6, }} />
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: 'transparent', justifyContent: 'center', paddingRight: 69, }}>
                            <Text style={{ color: lightMode?'#C2C3C3':'black', fontSize: 15, }}>Jonathan Doe</Text>
                            <Text style={{ color: lightMode?'#646667':'black', fontSize: 12, }}>doe.jonathan@gmail.com</Text>
                        </View>
                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', gap: 5, }} onPress={() => navigation.navigate('EditProfile')}>
                            <Octicons name="pencil" color={lightMode?'#B9992D':'orange'} size={20} />
                            <Text style={{ fontSize: 13, color: lightMode? '#B9992D': 'orange', }}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* end of Header */}

            <ScrollView>
                <View style={{ backgroundColor: lightMode? '#25272A': 'white', paddingHorizontal: 20, display: 'flex', flexDirection: 'column', paddingTop: 25, paddingBottom: 25, }}>
                    <View style={{ display: 'flex', flexDirection: 'column', gap: 25, }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center', }}>
                            <Feather name="inbox" color={lightMode?'#CDCDCD': 'black'} size={20} />
                            <Text style={{ color: lightMode?'#CDCDCD':'black', fontSize: 15, }}>Inbox</Text>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center', }}>
                            <Octicons name="person" color={lightMode?'#CDCDCD': 'black'} size={20} />
                            <Text style={{ color: lightMode?'#CDCDCD':'black', fontSize: 15, }}>Account Settings</Text>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center', }}>
                            <Feather name="settings" color={lightMode?'#CDCDCD': 'black'} size={20} />
                            <Text style={{ color: lightMode?'#CDCDCD':'black', fontSize: 15, }}>App Settings</Text>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center', }}>
                            <MaterialIcons name="language" color={lightMode?'#CDCDCD': 'black'} size={20} />
                            <Text style={{ color: lightMode?'#CDCDCD':'black', fontSize: 15, }}>Language</Text>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center', }}>
                            <AntDesign name="infocirlceo" color={lightMode?'#CDCDCD': 'black'} size={20} />
                            <Text style={{ color: lightMode?'#CDCDCD':'black', fontSize: 15, }}>Help</Text>
                        </View>
                    </View>

                    <View style={{ height: 45, backgroundColor: 'transparent', }}></View>

                    <View style={{ display: 'flex', flexDirection: 'column', gap: 15, backgroundColor: 'transparent', }}>
                        <Text style={{ color: lightMode?'#646667':'black', fontSize: 14, }}>Term & Conditions</Text>
                        <Text style={{ color: lightMode?'#646667':'black', fontSize: 14, }}>Privacy & Policy</Text>
                    </View>

                    <View style={{ height: 165, backgroundColor: 'transparent', }}></View>

                    <Pressable onPress={handleLogout} style={{ width: '100%', height: 'auto', backgroundColor: 'transparent', borderWidth: 1, borderColor: lightMode?'#646667':'black', paddingVertical: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 5, }}>
                        <Text style={{ color: lightMode?'#DC826C':'tomato', textAlign: 'center', }}>Log Out</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}