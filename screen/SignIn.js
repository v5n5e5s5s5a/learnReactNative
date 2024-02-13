import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
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
                    <CheckBox style={design.check}></CheckBox>
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


const design = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        width: '100%',
        height: 'auto',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50,
        paddingBottom: 70,
    },
    chechTick: {
        fontSize: 20,
    },
    signdiv: {
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    signin: {
        fontSize: 25,
        color: 'black',
    },
    welcome: {
        color: '#C3C3C3',
        marginTop: 5,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    divEnvelope: {
        backgroundColor: '#F7F7F7',
        marginTop: 40,
        height: 60,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    iconTouch: {
        backgroundColor: '#F8D3FE',
        width: '10%',
        height: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        position: 'absolute',
        marginLeft: 10,
    },
    envelopeIcon: {
        fontSize: 20,
        color: '#EB86FD',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        height: '100%',
        width: '100%',
        paddingLeft: 53,
    },
    div2Envelope: {
        backgroundColor: '#F7F7F7',
        marginTop: 20,
        height: 60,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    lockTouch: {
        backgroundColor: '#E1EAFF',
        width: '10%',
        height: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        position: 'absolute',
        marginLeft: 10,
    },
    lockIcon: {
        fontSize: 20,
        color: '#82A4FF',
    },
    checkboxDiv: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: -15,
    },
    check: {
        marginLeft: -10,
    },
    blue: {
        backgroundColor: 'white',
        width: '100%',
        height: 'auto',
        marginTop: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    forgotTouch: {
        width: 'auto',
        height: 20,
        backgroundColor: 'white',
    },
    forgotPassword: {
        fontSize: 15,
        color: '#119BFF',
    },
    signinbtn: {
        width: '100%',
        backgroundColor: '#119BFF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 30,
    },
    signinWord: {
        color: 'white',
        fontSize: 20,
    },
    createDiv: {
        backgroundColor: 'white',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    createSignup: {
        width: '20%',
        borderRadius: 10,
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
    },
    signup: {
        color: '#FBD492',
    },
    bottomIcons: {
        backgroundColor: 'white',
        marginTop: 80,
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    fbTouch: {
        width: '10%',
        height: 30,
        alignItems: 'center',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#F7F7F7',
        borderRadius: 30,
    },
    fb: {
        color: '#216CD3',
        fontSize: 20,
    },
    google: {
        color: '#D8513D',
        fontSize: 20,
    },
    apple: {
        color: '#15131E',
        fontSize: 20,
    }
})