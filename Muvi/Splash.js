import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('GetStarted')
        }, 2000);

        return () => clearTimeout(timer)
    }, [navigation]);

    return (
        <View style={{ backgroundColor: '#1F2123', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', }}>
            <StatusBar style="light" />
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, }}>
                <View style={{ backgroundColor: '#F3B919', paddingHorizontal: 15, borderRadius: 5, alignItems: 'center', }}>
                    <Text style={{ fontSize: 30, fontWeight: '900', color: '#22221F', }}>M</Text>
                </View>
                <Text style={{ color: '#FFFFFF', fontSize: 30, fontWeight: 'bold', }} 
                >Muvi</Text>
            </View>
        </View>
    );
};

export default Splash;
