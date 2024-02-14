import { StatusBar } from "expo-status-bar";
import { TextInput, Icon } from "react-native-paper";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { LoginStyles } from "./loginStyles";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import React from "react";

export const Login = () => {
    return (
        <View style={LoginStyles.body}>
            <StatusBar style="auto"/>
            <Image source={require('../assets/LoginLogo.jpeg')} style={LoginStyles.loginLogo} />

            <View style={LoginStyles.loginDiv}>

                <Text style={LoginStyles.loginWord}>Login</Text>
                <TextInput
                    style={LoginStyles.username}
                    mode="flat"
                    underlineColor="white"
                    label={'Username'}
                    left={<TextInput.Icon icon={'account-outline'} color='#F6A035' style={LoginStyles.userIcon} />}
                />
                <TextInput
                    style={LoginStyles.password}
                    mode="flat"
                    underlineColor="white"
                    label={'Password'}
                    left={<TextInput.Icon icon={'lock-outline'} color='#A09EF3' style={LoginStyles.passwordIcon} />}
                />

                <View style={LoginStyles.submit}>
                    <TouchableOpacity style={LoginStyles.forgotpassTouch}>
                        <Text style={LoginStyles.forgotpass}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={LoginStyles.submitTouch}>
                        <Text style={LoginStyles.submitLogin}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={LoginStyles.bottomIcons}>
                <TouchableOpacity style={LoginStyles.fbTouch}>
                    <Ionicons name="logo-facebook" style={LoginStyles.fb} />
                </TouchableOpacity>
                <TouchableOpacity style={LoginStyles.fbTouch}>
                    <FontAwesome name="google-plus-circle" style={LoginStyles.google} />
                </TouchableOpacity>
                <TouchableOpacity style={LoginStyles.fbTouch}>
                    <AntDesign name="apple1" style={LoginStyles.apple} />
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}