import { StatusBar } from "expo-status-bar";
import { View, Text, ImageBackground, Image, Dimensions, Pressable } from "react-native";
import React, { useEffect } from "react";

const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

export const Welcome = ({ navigation }) => {
    return (
        <View style={{ height: height, width: width, backgroundColor: '#26282C' }}>
            
            <View style={{ display: 'flex', flexDirection: 'column', }}>
                <StatusBar style="light" />
                <View style={{ backgroundColor: '#1F2123', width: '100%', height: '12%', paddingBottom: 10, justifyContent: 'flex-end', alignItems: 'center', }}>
                    <View style={{ backgroundColor: '#1F2123', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, }}>
                        <View style={{ backgroundColor: '#F3B919', paddingHorizontal: 15, borderRadius: 5, alignItems: 'center', }}>
                            <Text style={{ fontSize: 25, fontWeight: '900', color: '#22221F', }}>M</Text>
                        </View>
                        <Text style={{ color: '#FFFFFF', fontSize: 25, fontWeight: 'bold', }}>Muvi</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: '#26282C', height: '88%', width: '100%', alignItems: 'center', paddingHorizontal: 20, }}>
                    <View style={{ width: '100%', height: '10%', }}></View>
                    <View style={{ backgroundColor: '#26282C', height: 'auto', width: '80%', gap: 4, justifyContent: 'center', alignItems: 'center', }}>
                        <Image source={require('../assets/welcomeLogo.png')} />
                        <View style={{ width: '100%', height: '15%', }}></View>
                        <Text style={{ fontSize: 20, color: '#F3F3F3', fontWeight: 'bold', }}>Welcome to Muvi</Text>
                        <Text style={{ textAlign: 'center', fontSize: 13, letterSpacing: 1, color: '#DEE0E2', fontWeight: 100, }}>Free movie streaming all your needs everytime and everywhere</Text>
                    </View>

                    <View style={{ width: '100%', height: '25%', }}></View>
                    <View style={{ backgroundColor: '#F6BA00', width: '100%', paddingVertical: 10, alignItems: 'center', borderRadius: 5, justifyContent: 'center', }}>
                        <Text style={{ fontSize: 15, fontWeight: 500, }} onPress={() => navigation.navigate('Home')}>Watch Movie</Text>
                    </View>
                    <Pressable onPress={() => navigation.navigate('CreateAccount')}>
                    <Text style={{ marginTop: 15, fontSize: 15, color: '#F3F3F3', fontWeight: 300, }}  >Sign In</Text>
                    </Pressable>
                </View>


            </View>
        </View>

    )
}
// export default Welcome;