import { StatusBar } from "expo-status-bar";
import { View, Text, ImageBackground, Image, Dimensions, Pressable, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, Icon, IconButton } from "react-native-paper";
import Fontisto from "react-native-vector-icons/Fontisto"
import AntDesign from "react-native-vector-icons/AntDesign"

const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

export const CreateAccount = ({navigation}) => {
    return (
        <View style={{ height: height, width: width, }}>
            <SafeAreaView>
                <StatusBar style="light" />
                <View style={{ backgroundColor: '#26282C', paddingHorizontal: 20, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', }}>
                    <View style={{ width: '100%', height: '6%', backgroundColor: 'transparent', }}></View>

                    <View style={{ backgroundColor: 'transparent', display: 'flex', width: '100%', flexDirection: 'row', paddingLeft: -5, justifyContent: 'flex-start', gap: 5 }}>
                        <AntDesign name="arrowleft" style={{fontSize: 30, color: '#F3D235',}} onPress={() => navigation.navigate('Welcome')} />
                    </View>

                    <View style={{ width: '100%', height: '4%', backgroundColor: 'transparent', }}></View>

                    <View style={{ width: '100%', height: 'auto', gap: 15, }}>
                        <View style={{backgroundColor: 'transparent', width: '80%',}}>
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
                        />

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
                            right={<TextInput.Icon icon={'eye-off-outline'} color='#F6A035' />}
                        />

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
                            right={<TextInput.Icon icon={'eye-off-outline'} color='#F6A035' />}
                        />
                        <Text style={{ color: '#B8B7C0', textAlign: 'right' }}>Forgot Password?</Text>
                        <Text style={{ color: '#B8B7C0', textAlign: 'left' }}>or continue with:</Text>

                        <View style={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 10, }}>
                            <Image source={require('../assets/GoogleIcon2.png')} style={{ width: '13%', height: 40 }} />
                            <View style={{ backgroundColor: '#2E3033', color: '#405489', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15, paddingVertical: 3, }}>
                                <Fontisto name="facebook" style={{ backgroundColor: '#2E3033', color: '#405489', alignItems: 'center', fontSize: 25, }} />
                            </View>
                        </View>
                        <View style={{ width: '100%', height: '26%', backgroundColor: 'transparent', }}></View>
                        <Pressable
                        onPress={() => navigation.navigate('Login')} 
                        style={{ backgroundColor: '#F8B700', width: '100%', paddingVertical: 10, alignItems: 'center', borderRadius: 5, justifyContent: 'center', }}>
                            <Text style={{ fontSize: 15, }} >Register</Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}