import { StatusBar } from "expo-status-bar";
import { View, Text, ImageBackground, Image, Dimensions, Pressable, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { IconButton } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather"
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
    Filter, FilterName, MovieBrowseArray, MovieBrowseArray2, BrowseMovies,
    BrowseMoviesVertical, VerticalMovieBrowseArray, BottomNavigation, Header
} from "./Components";


const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

export const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const apiKey = 'f007044914ca0f93464221f612d59fa5';
            const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        
            <View style={{ flex: 1, }}>
                <Header />
                <ScrollView style={{ flex: 1, flexGrow: 1 }}>
                    <SafeAreaView style={{ backgroundColor: '#26282C', flex: 1 }}>

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
                                        {movies.map((movie, index) => (
                                            <View key={index}>
                                                <BrowseMovies
                                                    movie={movie}
                                                />
                                            </View>
                                        ))}
                                    </ScrollView>
                                </View>

                                <View style={{ display: 'flex', flexDirection: 'column', height: 'auto', backgroundColor: 'transparent', height: 200, width: '100%', gap: 8, marginTop: -22, }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 'auto', width: '100%', justifyContent: 'space-between', paddingRight: 20, }}>
                                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 500, }}>Made for you</Text>
                                        <Text style={{ color: 'white', fontWeight: 100, fontSize: 13, }}>View More</Text>
                                    </View>

                                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', height: 'auto', flexDirection: 'row', gap: 10, }}>
                                        {movies.map((movie, index) => (
                                            <View key={index}>
                                                <BrowseMovies
                                                    movie={movie}
                                                />
                                            </View>
                                        ))}
                                    </ScrollView>
                                </View>
                                {/* End of Horizontal Movie Broswe */}
                            </View>
                            {/*end of middle Section */}


                            {/*start of last Section */}
                            <View style={{ height: 'auto', backgroundColor: '#1A1C1E', paddingBottom: 20, width: '100%', gap: 10, paddingTop: 10, paddingRight: 20, paddingLeft: 20, }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 'auto', width: '100%', justifyContent: 'space-between', }}>
                                    <Text style={{ color: 'white', fontSize: 22, fontWeight: 500, }}>Popular on <Text style={{ color: '#FED032', }}>Muvi</Text> </Text>
                                    <Text style={{ color: 'white', fontWeight: 100, fontSize: 13, }}>View More</Text>
                                </View>
                                {movies.map((movie, index) => (
                                    <View key={index}>
                                        <BrowseMoviesVertical
                                            movie={movie}
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
                    iconColorFolder={'#C4C6C7'}
                    iconColorGrid={'#C4C6C7'}
                />
            </View>
        
    )
}