import { StatusBar } from "expo-status-bar";
import { View, Text, ImageBackground, TouchableOpacity, Pressable, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";

export const GetStarted = ({ navigation }) => {
    return (
        <SafeAreaView style={{backgroundColor: '#26282C',}}>
            <View style={{ height: '100%', }}>
                <StatusBar style="light" />
                <ImageBackground source={require('../assets/joker.jpg')}
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: 810,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        position: 'relative',
                    }}
                    resizeMode="cover"
                >

                    {/*  */}
                </ImageBackground>
                {/* <LinearGradient
                        colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,1)']}> */}
                <View style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', paddingHorizontal: 20, width: '100%', height: '100%', justifyContent: 'center', display: 'flex', flexDirection: 'column', }}>
                    <View style={{ width: '100%', height: '39%', }}></View>
                    <View style={{ display: 'flex', flexDirection: 'column', }}>
                        <View style={{ justifyContent: 'flex-start', width: '80%', }}>
                            <Text style={{ color: '#EBEBEA', fontSize: 26, fontWeight: 'bold' }}>Enjoy your favourite movie everywhere</Text>
                        </View>
                        <View style={{ width: '100%', height: 30, }}></View>
                        <View style={{ justifyContent: 'flex-start', width: '90%', }}>
                            <Text style={{ color: '#DDCCD0', fontSize: 14, textAlign: 'left', fontWeight: 300, }}>Browse through our collection and{'\n'}discover hundreds of movies and series that you'll love</Text>
                        </View>
                        <View style={{ width: '100%', height: 35, }}></View>
                        <View style={{ height: 'auto', width: 'auto', display: 'flex', gap: 5, flexDirection: 'row', }}>
                            <View style={{ backgroundColor: '#AFA35A', height: 8, width: 45, borderRadius: 20, }}></View>
                            <View style={{ backgroundColor: '#A9A685', height: 8, width: 15, borderRadius: 20, }}></View>
                            <View style={{ backgroundColor: '#A9A685', height: 8, width: 15, borderRadius: 20, }}></View>
                        </View>
                    </View>
                    
                    <View style={{ width: '100%', height: '30%', }}></View>
                    <Pressable style={{ backgroundColor: '#F2B916', width: '100%', paddingVertical: 10, alignItems: 'center', borderRadius: 5, justifyContent: 'center', }} onPress={() => navigation.navigate('Welcome')}>
                        <Text style={{ fontSize: 15, }} >Get Started</Text>
                    </Pressable>
                </View>
                {/* </LinearGradient> */}

            </View>

        </SafeAreaView>

    );
};

// export default GetStarted;
