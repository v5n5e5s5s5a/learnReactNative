import { StatusBar } from "expo-status-bar";
import { View, Text, ImageBackground, Image, Dimensions, Pressable, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { IconButton } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather"

import {
    Filter, FilterName, MovieBrowseArray, MovieBrowseArray2, BrowseMovies,
    BrowseMoviesVertical, VerticalMovieBrowseArray, BottomNavigation, Header
} from "./Components";


const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

export const Home = () => {
    return (
        <View style={{ flex: 1, }}>
            <Header/>
            <ScrollView>
                <SafeAreaView style={{ backgroundColor: '#26282C', }}>

                    <View style={{ display: 'flex', flexDirection: 'column', }}>
                        <StatusBar style="light" />


                        {/*start middle Section */}
                        <View style={{ backgroundColor: '#26282C', height: 'auto', width: '100%', alignItems: 'flex-start', paddingLeft: 20, paddingTop: 20, gap: 20, paddingBottom: -5 }}>

                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 5, }}>
                                {FilterName.map((item, index) => (
                                    <Text key={index}>
                                        < Filter
                                            name={item.name}
                                        />
                                    </Text>
                                ))}
                            </ScrollView>


                            {/* Start of Horizontal Movie Broswe */}
                            <View style={{ display: 'flex', flexDirection: 'column', height: 'auto', backgroundColor: 'transparent', height: 200, width: '100%', gap: 8, }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 'auto', width: '100%', justifyContent: 'space-between', paddingRight: 20, }}>
                                    <Text style={{ color: 'white', fontSize: 22, fontWeight: 500, }}>New Release</Text>
                                    <Text style={{ color: 'white', fontWeight: 100, fontSize: 13, }}>View More</Text>
                                </View>

                                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', height: 'auto', flexDirection: 'row', gap: 10, }}>
                                    {MovieBrowseArray.map((item, index) => (
                                        <View key={index}>
                                            < BrowseMovies
                                                image={item.image}
                                                rate={item.rate}
                                            />
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>

                            <View style={{ display: 'flex', flexDirection: 'column', height: 'auto', backgroundColor: 'transparent', height: 200, width: '100%', gap: 8, marginTop: -22,}}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 'auto', width: '100%', justifyContent: 'space-between', paddingRight: 20, }}>
                                    <Text style={{ color: 'white', fontSize: 22, fontWeight: 500, }}>Made for you</Text>
                                    <Text style={{ color: 'white', fontWeight: 100, fontSize: 13, }}>View More</Text>
                                </View>

                                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', height: 'auto', flexDirection: 'row', gap: 10, }}>
                                    {MovieBrowseArray2.map((item, index) => (
                                        <View key={index}>
                                            < BrowseMovies
                                                image={item.image}
                                                rate={item.rate}
                                            />
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>
                            {/* End of Horizontal Movie Broswe */}
                        </View>
                        {/*end of middle Section */}


                        {/*start of last Section */}
                        <View style={{ height: 'auto', backgroundColor: '#1A1C1E', height: 740, width: '100%', gap: 10, paddingTop: 10, paddingRight: 20, paddingLeft: 20, }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 'auto', width: '100%', justifyContent: 'space-between', }}>
                                <Text style={{ color: 'white', fontSize: 22, fontWeight: 500, }}>Popular on <Text style={{ color: '#FED032', }}>Muvi</Text> </Text>
                                <Text style={{ color: 'white', fontWeight: 100, fontSize: 13, }}>View More</Text>
                            </View>
                            {VerticalMovieBrowseArray.map((item, index) => (
                                <View key={index}>
                                    <BrowseMoviesVertical
                                        image={item.image}
                                        rate={item.rate}
                                    />
                                </View>
                            ))}

                        </View>


                        {/*end of last Section */}

                    </View>
                </SafeAreaView>
            </ScrollView>
            <BottomNavigation 
            iconColorHome={'#E5C053'}
            iconColorSearch={'#C4C6C7'}
            iconColorFolder= {'#C4C6C7'}
            iconColorGrid={'#C4C6C7'}
            />
        </View>
    )
}