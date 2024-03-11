import { StatusBar } from "expo-status-bar";
import { View, Text, ImageBackground, ScrollView, Image, Dimensions, Pressable, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, Icon, IconButton } from "react-native-paper";
import Fontisto from "react-native-vector-icons/Fontisto"
import AntDesign from "react-native-vector-icons/AntDesign"
import { firebaseAuth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { GoogleSignin, GoogleSigninButton, statusCodes } from "@react-native-google-signin/google-signin";



const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

export const CreateAccount = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }
    const validateForm = () => {
        let valid = true

        if (email.trim() == '') {
            setEmailError('Email is required')
            valid = false
        } else if (!isValidEmail(email)) {
            setEmailError('Invalid email format')
            valid = false
        } else {
            setEmailError('')
        }

        if (password.trim() == '') {
            setPasswordError('Password is required')
            valid = false
        } else {
            setPasswordError('')
        }


        if (confirmPassword.trim() == '') {
            setConfirmPasswordError('Confirm Password is required');
            valid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            valid = false;
        } else {
            setConfirmPasswordError('');
        }

        return valid
    }


    const data = {
        email: email,
        password: password
    }

    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                const response = await createUserWithEmailAndPassword(firebaseAuth, email, password)
                console.log(response);
                console.log('Registered successfully');
                showMessage({
                    message: "Successfully Signed Up",
                    type: "success",
                    icon: "info",
                    hideStatusBar: true,
                    duration: 3000,
                });
               setTimeout(() => {
                navigation.navigate('Login', {email, password});
               }, 2000); 
                await AsyncStorage.setItem('user-data', JSON.stringify(data))
                
            } catch (error) {
                console.log(error);
                showMessage({
                    message: error.code,
                    type: "danger",
                    icon: "info",
                    duration: 3000,
                });
            } 
        }
    }

    // const handleGoogleSignIn = async () => {
    //     try {
    //         await GoogleSignin.hasPlayServices();
    //         const userInfo = await GoogleSignin.signIn();
    //         console.log(userInfo);
    //     } catch (error) {
    //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //             // User canceled the sign-in process
    //           } else if (error.code === statusCodes.IN_PROGRESS) {
    //             // Operation (e.g., sign-in) is in progress already
    //           } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //             // Play services not available or outdated on the device
    //           } else {
    //             // Some other error occurred
    //             console.error(error);
    //           }
    //     }
    // }
    
    return (
        <View style={{ height: height, width: width, flex: 1, backgroundColor: '#26282C', }}>
            <FlashMessage position="top" />
            <SafeAreaView style={{ backgroundColor: '#26282C', height: height, width: width, flex: 1, }}>
                <StatusBar style="light" />
                <View style={{ backgroundColor: '#26282C', paddingHorizontal: 20, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', }}>
                    <View style={{ width: '100%', height: '6%', backgroundColor: 'transparent', }}></View>

                    <View style={{ backgroundColor: 'transparent', display: 'flex', width: '100%', flexDirection: 'row', paddingLeft: -5, justifyContent: 'flex-start', gap: 5 }}>
                        <AntDesign name="arrowleft" style={{ fontSize: 30, color: '#F3D235', }} onPress={() => navigation.goBack()} />
                    </View>

                    <View style={{ width: '100%', height: '4%', backgroundColor: 'transparent', }}></View>

                    <View style={{ width: '100%', height: 'auto', gap: 15, }}>
                        <View style={{ backgroundColor: 'transparent', width: '80%', }}>
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', }}>Create Account</Text>
                            <Text style={{ color: 'white', fontSize: 14, fontWeight: 300, }}>Enter Infomation below or login with social account to get started</Text>
                        </View>
                        <TextInput
                            theme={{
                                colors: {
                                    primary: '#FCD130',
                                    text: 'white'
                                }
                            }}
                            textColor="white"

                            style={{ backgroundColor: 'transparent', width: '100%', textAlign: 'left', borderBottomWidth: 1, borderBottomColor: '#37393D', }}
                            mode="outline"
                            underlineColor="#37393D"
                            placeholder="Email" placeholderTextColor={'#B8B7C0'}
                            right={<TextInput.Icon icon={'email-outline'} color='#F6A035' />}
                            autoCompleteType="email"
                            autoCorrect={false}
                            value={email}
                            onChangeText={setEmail}
                            error={emailError}
                        />
                        {emailError ? <Text style={{ color: 'red', }}>{emailError}</Text> : null}

                        <TextInput
                            theme={{
                                colors: {
                                    primary: '#FCD130',
                                }
                            }}
                            textColor="white"
                            style={{ backgroundColor: 'transparent', width: '100%', textAlign: 'left', borderBottomWidth: 1, borderBottomColor: '#37393D', }}
                            mode="outline"
                            underlineColor="#37393D"
                            placeholder="Password" placeholderTextColor={'#B8B7C0'}
                            secureTextEntry={secureTextEntry}
                            right={<TextInput.Icon icon={secureTextEntry? 'eye-outline': 'eye-off-outline'} color='#F6A035' onPress={() => {setSecureTextEntry(!secureTextEntry)}} />}
                            value={password}
                            onChangeText={setPassword}
                            error={passwordError}
                        />
                        {passwordError ? <Text style={{ color: 'red', }}>{passwordError}</Text> : null}

                        <TextInput
                            theme={{
                                colors: {
                                    primary: '#FCD130',
                                }

                            }}
                            textColor="white"
                            style={{ backgroundColor: 'transparent', width: '100%', fontSize: 15, textAlign: 'left', borderBottomWidth: 1, borderBottomColor: '#37393D', }}
                            mode="outline"
                            underlineColor="#37393D"
                            placeholder="Confirm Password" placeholderTextColor={'#B8B7C0'}
                            secureTextEntry={secureTextEntry}
                            right={<TextInput.Icon icon={secureTextEntry? 'eye-outline': 'eye-off-outline'} color='#F6A035' onPress={() => {setSecureTextEntry(!secureTextEntry)}} />}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            error={passwordError}
                        />
                        {confirmPasswordError ? (<Text style={{ color: 'red' }}>{confirmPasswordError}</Text>) : null}


                        <Text style={{ color: '#B8B7C0', textAlign: 'right' }}>Forgot Password?</Text>
                        <Text style={{ color: '#B8B7C0', textAlign: 'left' }}>or continue with:</Text>

                        <View style={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 10, }}>
                            <Image source={require('../assets/GoogleIcon2.png')} style={{ width: '13%', height: 40 }} />
                            <View style={{ backgroundColor: '#2E3033', color: '#405489', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15, paddingVertical: 3, }}>
                                <Fontisto name="facebook" style={{ backgroundColor: '#2E3033', color: '#405489', alignItems: 'center', fontSize: 25, }} />
                            </View>
                        </View>
                        <View style={{ width: '100%', height: '26%', backgroundColor: 'transparent', }}></View>

                    </View>
                </View>

            </SafeAreaView>
            <Pressable
                onPress={handleSubmit}
                style={{ backgroundColor: '#F8B700', width: '90%', paddingVertical: 10, alignItems: 'center', borderRadius: 5, justifyContent: 'center', position: 'absolute', bottom: 20, alignSelf: 'center', }}>
                <Text style={{ fontSize: 15, }} >Register</Text>
            </Pressable>
        </View>
    )
}