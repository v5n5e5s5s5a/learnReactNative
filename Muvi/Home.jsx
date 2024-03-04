import { StatusBar } from "expo-status-bar";
import { View, Text, ImageBackground, Image, Dimensions, Pressable, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { IconButton } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather"
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
    Filter, FilterName, MovieBrowseArray, MovieBrowseArray2, BrowseMovies,
    BrowseMoviesVertical, VerticalMovieBrowseArray, BottomNavigation, Header
} from "./Components";


const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

export const Home = ({ navigation }) => {

    const handleImagePress = (id, title, overview) => {
        console.log(id);
        console.log('this is the title', title);
        console.log('this is the overview', overview);
        navigation.navigate('Action', { movieid: id, movieTitle: title, movieOverview: overview });

    };

    const handleImagePressTV = (id, name, overview) => {
        console.log(id);
        console.log('this is the TV name', name);
        console.log('this is the TV overview', overview);
        navigation.navigate('ActionTV', { movieid: id, movieName: name, movieOverview: overview });
    };


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDA3MDQ0OTE0Y2EwZjkzNDY0MjIxZjYxMmQ1OWZhNSIsInN1YiI6IjY1ZDg2ZDQyYTI4NGViMDEyZjg3OTIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5GE0TQ0QzjxJEJ-YCTphGe6isMUhYtEz1Gey066mdYw'
        }
    };

    const [movies, setMovies] = useState([]);
    const fetchMovies = () => {

        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => {
                setMovies(response.results)
            })
            .catch(err => console.error(err));

    };
    useEffect(() => {
        fetchMovies()
    }, [])



    const [movies2, setMovies2] = useState([]);
    const fetchMovies2 = () => {

        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => {
                setMovies2(response.results)
            })
            .catch(err => console.error(err));

    };
    useEffect(() => {
        fetchMovies2()
    }, [])


    const [moviesVertical, SetMoviesVertical] = useState([]);
    const fetchMoviesVertical = () => {

        fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => {
                SetMoviesVertical(response.results)
            })
            .catch(err => console.error(err));

    };
    useEffect(() => {
        fetchMoviesVertical()
    }, [])


    return (

        <View style={{ flex: 1, }}>
            <Header />
            <ScrollView style={{ flex: 1, flexGrow: 1, paddingBottom: 20, height: 'auto', backgroundColor: '#1A1C1E', }}>
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
                                        <BrowseMovies key={index} movie={movie}
                                            onPressImage={() => { handleImagePress(movie.id, movie.title, movie.overview) }}
                                        />
                                    ))}
                                </ScrollView>
                            </View>

                            <View style={{ display: 'flex', flexDirection: 'column', height: 'auto', backgroundColor: 'transparent', height: 200, width: '100%', gap: 8, marginTop: -22, }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 'auto', width: '100%', justifyContent: 'space-between', paddingRight: 20, }}>
                                    <Text style={{ color: 'white', fontSize: 22, fontWeight: 500, }}>Made for you</Text>
                                    <Text style={{ color: 'white', fontWeight: 100, fontSize: 13, }}>View More</Text>
                                </View>

                                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', height: 'auto', flexDirection: 'row', gap: 10, }}>
                                    {movies2.map((movie, index) => (
                                        <BrowseMovies key={index} movie={movie}
                                            onPressImage={() => { handleImagePress(movie.id, movie.title, movie.overview) }}
                                        />
                                    ))}
                                </ScrollView>
                            </View>
                            {/* End of Horizontal Movie Broswe */}
                        </View>
                        {/*end of middle Section */}


                        {/*start of last Section */}
                        <View style={{ height: 'auto', backgroundColor: '#1A1C1E', paddingBottom: 50, width: '100%', gap: 10, paddingTop: 10, paddingRight: 20, paddingLeft: 20, }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 'auto', width: '100%', justifyContent: 'space-between', }}>
                                <Text style={{ color: 'white', fontSize: 22, fontWeight: 500, }}>Popular on <Text style={{ color: '#FED032', }}>Muvi</Text> </Text>
                                <Text style={{ color: 'white', fontWeight: 100, fontSize: 13, }}>View More</Text>
                            </View>
                            {moviesVertical.map((movie, index) => (
                                <BrowseMoviesVertical key={index}
                                    movie={movie}
                                    onPressImage={() => { handleImagePressTV(movie.id, movie.name, movie.overview) }}
                                />
                            ))}

                        </View>
                        {/*end of last Section */}

                    </View>
                </SafeAreaView>
            </ScrollView>
            {/* <BottomNavigation
                iconColorHome={'#E5C053'}
                iconColorSearch={'#C4C6C7'}
                iconColorList={'#C4C6C7'}
                iconColorProfile={'#C4C6C7'}
                onSearchPress={handleSearchPress}
            /> */}
        </View>

    )
}