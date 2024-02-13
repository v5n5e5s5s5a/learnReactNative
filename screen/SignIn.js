import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { design } from "./SignInCss";
import { CheckBox } from "react-native-elements";
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import React from "react";

export const SignIn = () => {
    return (
        <View style={design.body}>
            <StatusBar style="auto" />
            <TouchableOpacity>
                <Feather name="x" style={design.chechTick} />
            </TouchableOpacity>
            <View style={design.signdiv}>
                <Text style={design.signin}>Sign In</Text>
                <Text style={design.welcome}>welcome back! Please enter your details</Text>
            </View>

            <View style={design.form}>
                <View style={design.divEnvelope}>
                    <TouchableOpacity style={design.iconTouch}>
                        <FontAwesome name="envelope-o" style={design.envelopeIcon} />
                    </TouchableOpacity>
                    <TextInput style={design.input} placeholder="quickrakibull@gmail.com" placeholderTextColor={'gray'}></TextInput>
                </View>
                <View style={design.div2Envelope}>
                    <TouchableOpacity style={design.lockTouch}>
                        <AntDesign name="lock" style={design.lockIcon} />
                    </TouchableOpacity>
                    <TextInput style={design.input} placeholder="Password" placeholderTextColor={'gray'}></TextInput>
                </View>
                <View style={design.checkboxDiv}>
                    <CheckBox containerStyle={design.checkContainer}></CheckBox>
                    <Text>Remember Me</Text>
                </View>
            </View>

            <View style={design.blue}>
                <TouchableOpacity style={design.forgotTouch}>
                    <Text style={design.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={design.signinbtn}>
                    <Text style={design.signinWord}>Sign In</Text>
                </TouchableOpacity>
            </View>

            <View style={design.createDiv}>
                <TouchableOpacity style={design.create}>
                    <Text>Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={design.createSignup}>
                    <Text style={design.signup}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <View style={design.bottomIcons}>
                <TouchableOpacity style={design.fbTouch}>
                    <Ionicons name="logo-facebook" style={design.fb} />
                </TouchableOpacity>
                <TouchableOpacity style={design.fbTouch}>
                    <FontAwesome name="google-plus-circle" style={design.google} />
                </TouchableOpacity>
                <TouchableOpacity style={design.fbTouch}>
                    <AntDesign name="apple1" style={design.apple} />
                </TouchableOpacity>
            </View>
        </View>
    )
}


