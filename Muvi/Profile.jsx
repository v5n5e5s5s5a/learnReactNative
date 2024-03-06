import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, ActivityIndicator, Dimensions, SafeAreaView, Image, Pressable } from "react-native";
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

export const Profile = ({ navigation }) => {
    const height = Dimensions.get("screen")
    const width = Dimensions.get("screen")
    const { logout } = useAuth();

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
    return (
        <View style={{height: height, width: width, backgroundColor: '#25272A',}}>
            <StatusBar style="light" />
            {/* start of Header */}
            <View style={{ zIndex: 1, }}>
                <View style={{ backgroundColor: '#1F2123', width: '100%', height: 'auto', paddingTop: 50, paddingBottom: 15, justifyContent: 'space-between', alignItems: 'Flex-start', display: 'flex', flexDirection: 'column', gap: 15, paddingHorizontal: 20, }}>
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 500, }}>More</Text>
                    <View style={{ backgroundColor: 'transparent', }}></View>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'flex-start', }}>
                        <Image source={require('../assets/muviImages/profileImage1.jpg')} style={{ width: '20%', height: 70, borderRadius: 6, }} />
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 6, backgroundColor: 'transparent', justifyContent: 'center', paddingRight: 69, }}>
                            <Text style={{ color: '#C2C3C3', fontSize: 15, }}>Jonathan Doe</Text>
                            <Text style={{ color: '#646667', fontSize: 12, }}>doe.jonathan@gmail.com</Text>
                        </View>
                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', gap: 5, }} onPress={()=> navigation.navigate('EditProfile')}>
                            <Octicons name="pencil" color={'#B9992D'} size={20} />
                            <Text style={{ fontSize: 13, color: '#B9992D', }}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* end of Header */}

            <ScrollView>
                <View style={{ backgroundColor: '#25272A', paddingHorizontal: 20, display: 'flex', flexDirection: 'column', paddingTop: 25, paddingBottom: 25, }}>
                    <View style={{ display: 'flex', flexDirection: 'column', gap: 25, }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center', }}>
                            <Feather name="inbox" color={'#CDCDCD'} size={20} />
                            <Text style={{ color: '#CDCDCD', fontSize: 15, }}>Inbox</Text>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center', }}>
                            <Octicons name="person" color={'#CDCDCD'} size={20} />
                            <Text style={{ color: '#CDCDCD', fontSize: 15, }}>Account Settings</Text>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center', }}>
                            <Feather name="settings" color={'#CDCDCD'} size={20} />
                            <Text style={{ color: '#CDCDCD', fontSize: 15, }}>App Settings</Text>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center', }}>
                            <MaterialIcons name="language" color={'#CDCDCD'} size={20} />
                            <Text style={{ color: '#CDCDCD', fontSize: 15, }}>Language</Text>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center', }}>
                            <AntDesign name="infocirlceo" color={'#CDCDCD'} size={20} />
                            <Text style={{ color: '#CDCDCD', fontSize: 15, }}>Help</Text>
                        </View>
                    </View>

                    <View style={{ height: 45, backgroundColor: 'transparent', }}></View>

                    <View style={{ display: 'flex', flexDirection: 'column', gap: 15, backgroundColor: 'transparent', }}>
                        <Text style={{ color: '#646667', fontSize: 14, }}>Term & Conditions</Text>
                        <Text style={{ color: '#646667', fontSize: 14, }}>Privacy & Policy</Text>
                    </View>

                    <View style={{ height: 165, backgroundColor: 'transparent', }}></View>

                    <Pressable onPress={handleLogout} style={{ width: '100%', height: 'auto', backgroundColor: 'transparent', borderWidth: 1, borderColor: '#646667', paddingVertical: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 5, }}>
                        <Text style={{ color: '#DC826C', textAlign: 'center', }}>Log Out</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}