import { StatusBar } from "expo-status-bar";
import { View, Text, ImageBackground, Image, Dimensions, Pressable, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { IconButton } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather"
import Fontisto from "react-native-vector-icons/Fontisto"
import { Filter, FilterName, MovieBrowseArray, MovieBrowseArray2, BrosweMovies } from "./Components";


const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

export const Home = () => {

    const [showSignInSuccess, setShowSignInSuccess] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowSignInSuccess(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);


    return (
        <View style={{ height: height, width: width, }}>
            <SafeAreaView>
                <View style={{ display: 'flex', flexDirection: 'column', }}>
                    <StatusBar style="light" />

                    <View>
                        {showSignInSuccess && (
                            <View style={{ position: 'absolute', zIndex: 1, backgroundColor: '#34B452', width: '100%', height: 'auto', justifyContent: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 25, paddingBottom: 10, }}>
                                <Text style={{ color: 'white', fontSize: 15, }}>Sign in successful</Text>
                            </View>
                        )}

                        <View style={{ backgroundColor: '#1F2123', width: '100%', height: 'auto', paddingTop: 60, paddingBottom: 1, justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 15, }}>
                            <View style={{ backgroundColor: '#1F2123', width: '100%', height: 'auto', justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', }}>
                                <View style={{ backgroundColor: '#1F2123', display: 'flex', flexDirection: 'row', paddingLeft: 20, alignItems: 'center', gap: 5, }}>
                                    <View style={{ backgroundColor: '#F3B919', paddingHorizontal: 15, borderRadius: 5, alignItems: 'center', }}>
                                        <Text style={{ fontSize: 25, fontWeight: '900', color: '#22221F', }}>M</Text>
                                    </View>
                                    <Text style={{ color: '#FFFFFF', fontSize: 25, fontWeight: 'bold', }}>Muvi</Text>
                                </View>

                                <View style={{ backgroundColor: '#1F2123', gap: 20, width: 'auto', alignItems: 'center', paddingRight: 20, display: 'flex', flexDirection: 'row', paddingBottom: 7, paddingTop: 6, justifyContent: 'flex-end', }}>
                                    <Feather name="bookmark" style={{ color: '#ECEEF0', fontSize: 24, }} />
                                    <Fontisto name="bell" style={{ color: '#ECEEF0', fontSize: 24 }} />
                                </View>
                            </View>
                            {/* <View style={{ width: '100%', height: '20%',backgroundColor: 'yellow', }}></View> */}
                            <ScrollView horizontal contentContainerStyle={{ gap: 45, alignItems: 'center', justifyContent: 'center', paddingLeft: 20, display: 'flex', flexDirection: 'row', }}>
                                <View style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                                    <Text style={{ fontSize: 16, color: '#FCCF33', }}>Featured</Text>
                                    <View style={{ backgroundColor: '#FCCF33', height: 6, width: '75%', borderRadius: 15, }}></View>
                                </View>
                                <View style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                                    <Text style={{ fontSize: 16, color: '#E6E8E9', }}>series</Text>
                                    <View style={{ backgroundColor: 'transparent', height: 6, width: '75%', borderRadius: 15, }}></View>
                                </View>
                                <View style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                                    <Text style={{ fontSize: 16, color: '#E6E8E9', }}>films</Text>
                                    <View style={{ backgroundColor: 'transparent', height: 6, width: '75%', borderRadius: 15, }}></View>
                                </View>
                                <View style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                                    <Text style={{ fontSize: 16, color: '#E6E8E9', }}>origin</Text>
                                    <View style={{ backgroundColor: 'transparent', height: 6, width: '75%', borderRadius: 15, }}></View>
                                </View>
                                <View style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                                    <Text style={{ fontSize: 16, color: '#E6E8E9', }}>Movies</Text>
                                    <View style={{ backgroundColor: 'transparent', height: 6, width: '75%', borderRadius: 15, }}></View>
                                </View>

                            </ScrollView >

                        </View>
                    </View>

                    <View style={{ backgroundColor: '#26282C', height: 'auto', width: '100%', alignItems: 'flex-start', paddingLeft: 20, paddingTop: 20, gap: 25, }}>

                        <ScrollView horizontal contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 5, }}>
                            {FilterName.map((item, index) => (
                                <Text key={index}>
                                    < Filter
                                        name={item.name}
                                    />
                                </Text>
                            ))}
                        </ScrollView>

                        <View style={{ display: 'flex', flexDirection: 'column', height: 'auto', backgroundColor: 'green',height: 200, width: '100%', }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 'auto', width: '100%', justifyContent: 'space-between', paddingRight: 20, }}>
                                <Text style={{color: 'white', fontSize: 22, fontWeight: 500,}}>New Release</Text>
                                <Text style={{color: 'white', fontWeight: 100,}}>View More</Text>
                            </View>

                            <ScrollView horizontal contentContainerStyle={{ display: 'flex',height: 'auto', flexDirection: 'row', gap: 10, }}>
                                {MovieBrowseArray.map((item, index) => (
                                    <View key={index}>
                                        < BrosweMovies
                                            image={item.image}
                                            rate={item.rate}
                                        />
                                    </View>
                                ))}
                            </ScrollView>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'column', height: 'auto', backgroundColor: 'green',height: 200, width: '100%', gap: 8,}}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 'auto', width: '100%', justifyContent: 'space-between', paddingRight: 20, }}>
                                <Text style={{color: 'white', fontSize: 22, fontWeight: 500,}}>New Release</Text>
                                <Text style={{color: 'white', fontWeight: 100,}}>View More</Text>
                            </View>

                            <ScrollView horizontal contentContainerStyle={{ display: 'flex',height: 'auto', flexDirection: 'row', gap: 10, }}>
                                {MovieBrowseArray2.map((item, index) => (
                                    <View key={index}>
                                        < BrosweMovies
                                            image={item.image}
                                            rate={item.rate}
                                        />
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </View>




                </View>
            </SafeAreaView>
        </View>
    )
}