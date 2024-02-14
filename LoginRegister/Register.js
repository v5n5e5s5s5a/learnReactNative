import { StatusBar } from "expo-status-bar";
import { TextInput, Icon } from "react-native-paper";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { registerStyles } from "./registerStyles";
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import React from "react";

export const Register = () => {
    return (
        <View style={registerStyles.parent}>
            <StatusBar style="auto" />

            <Image source={require('../assets/RegisterLogo.jpeg')} style={registerStyles.registerLogo} />


            <View style={registerStyles.form}>
                <Text style={registerStyles.loginWord}>Register</Text>
                <TextInput
                    style={registerStyles.username}
                    mode="flat"
                    underlineColor="white"
                    // label={'Username'}
                    placeholder="Username" placeholderTextColor={'#B8B7C0'}
                    left={<TextInput.Icon icon={'account-outline'} color='#F6A035' style={registerStyles.userIcon} />}
                />

                <TextInput
                    style={registerStyles.email}
                    mode="flat"
                    underlineColor="white"
                    secureTextEntry
                    // label={'Email'}
                    placeholder="Email" placeholderTextColor={'#B8B7C0'}
                    left={<TextInput.Icon icon={'email-outline'} color='#76C88B' style={registerStyles.eamilIcon} />}
                />

                <TextInput
                    style={registerStyles.password}
                    mode="flat"
                    underlineColor="white"
                    // label={'Password'}
                    placeholder="Password" placeholderTextColor={'#B8B7C0'}
                    left={<TextInput.Icon icon={'lock-outline'} color='#A09EF3' style={registerStyles.passwordIcon} />}
                />

                <TouchableOpacity style={registerStyles.submitTouch}>
                    <Text style={registerStyles.submitLogin}>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={registerStyles.bottomIcons}>
                <TouchableOpacity style={registerStyles.fbTouch}>
                    <Ionicons name="logo-facebook" style={registerStyles.fb} />
                </TouchableOpacity>
                <TouchableOpacity style={registerStyles.fbTouch}>
                    <Image source={require('../assets/googleIcon.png')} style={registerStyles.google} />
                </TouchableOpacity>
                <TouchableOpacity style={registerStyles.fbTouch}>
                    <AntDesign name="apple1" style={registerStyles.apple} />
                </TouchableOpacity>
            </View>
        </View>
    )
}