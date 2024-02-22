import { StatusBar } from "expo-status-bar";
import { View, Text, ImageBackground, Image, Dimensions, Pressable, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, Icon, IconButton } from "react-native-paper";
import Fontisto from "react-native-vector-icons/Fontisto"

const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

export const Login = ({ navigation }) => {
    return (
        <View style={{ height: height, width: width, }}>
            <SafeAreaView>
                <View style={{ height: '100%', }}>
                    <StatusBar style="light" />
                    <ImageBackground source={require('../assets/signInBg.jpg')}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: 400,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            position: 'relative',
                        }}
                        resizeMode="cover">

                        {/*  */}
                    </ImageBackground>
                    <LinearGradient colors={['rgba(0,0,0,0.7)', '#26282C', '#26282C']}>
                        {/* <View style={{ width: '100%', height: '7%', }}></View> */}


                        <View style={{ paddingHorizontal: 20, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', }}>
                            <View style={{ backgroundColor: 'transparent', display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 50, }}>
                                <View style={{ backgroundColor: '#F3B919', paddingHorizontal: 13, borderRadius: 5, alignItems: 'center', }}>
                                    <Text style={{ fontSize: 25, fontWeight: '900', color: '#5A5455', }}>M</Text>
                                </View>
                                <Text style={{ color: '#FBFEFD', fontSize: 25, fontWeight: 500, }}>Muvi</Text>
                            </View>

                            <View style={{ width: '100%', height: '30%', backgroundColor: 'transparent', }}></View>

                            <View style={{ width: '100%', height: 'auto', gap: 20, }}>
                                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', }}>Login</Text>
                                {/* <View style={{ width: '100%', height: '2%', backgroundColor: 'transparent', }}></View> */}
                                <TextInput
                                    theme={{
                                        colors: {
                                            primary: '#FCD130',
                                            text: 'white'
                                        }
                                    }}
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
                                            text: 'white'
                                        }
                                    }}
                                    style={{ backgroundColor: 'transparent', width: '100%', textAlign: 'left', borderBottomWidth: 1, borderBottomColor: '#37393D', }}
                                    mode="outline"
                                    underlineColor="#37393D"
                                    placeholder="Password" placeholderTextColor={'#B8B7C0'}
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
                                <View style={{ width: '100%', height: '10%', backgroundColor: 'transparent', }}></View>
                                <Pressable style={{ backgroundColor: '#F8B700', width: '100%', paddingVertical: 10, alignItems: 'center', borderRadius: 5, justifyContent: 'center', }} onPress={() => navigation.navigate('Home')}>
                                    <Text style={{ fontSize: 15, }} >Login</Text>
                                </Pressable>
                            </View>
                        </View>
                    </LinearGradient>

                </View>

            </SafeAreaView>
        </View>
    )
}

