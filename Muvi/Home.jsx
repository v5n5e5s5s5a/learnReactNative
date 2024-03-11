import { StatusBar } from "expo-status-bar";
import { View, Text, ImageBackground, Image, Dimensions, Pressable, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { IconButton } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather"
import Fontisto from "react-native-vector-icons/Fontisto"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    Filter, FilterName, MovieBrowseArray, MovieBrowseArray2, BrowseMovies,
    BrowseMoviesVertical, VerticalMovieBrowseArray, BottomNavigation, Header
} from "./Components";
import { HeaderHome } from "./Header";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useAuth } from "./Authentication";


const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

export const Home = ({ navigation }) => {

    const { data,lightMode, changeToLightMode } = useAuth();

    const handleImagePress = (id, title, overview) => {
        console.log(id);
        console.log('this is the title', title);
        console.log('this is the overview', overview);
        navigation.navigate('Details', { movieid: id, movieTitle: title, movieOverview: overview });

    };

    const handleImagePressTV = (id, name, overview) => {
        console.log(id);
        console.log('this is the TV name', name);
        console.log('this is the TV overview', overview);
        navigation.navigate('DetailsTV', { movieid: id, movieName: name, movieOverview: overview });
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
        console.log(moviesVertical);

    };
    useEffect(() => {
        fetchMoviesVertical()
    }, [])

    const getData = async () => {
        let data = await AsyncStorage.getItem('user-data')
        console.log(data);
    }

    useEffect(() => {
        getData()
    }, [])


    // const [genresHome, setGenresHome] = useState([])
    // const fetchHeaderGenres = () => {
    //     fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    //         .then(response => response.json())
    //         .then(response => {
    //             setGenresHome(response.genres)
    //         })
    //         .catch(err => console.error(err));
    // }

    // useEffect(() => {
    //     fetchHeaderGenres()
    //     console.log("these are genres", genresHome);
    // }, [])

    return (

        <View style={{ flex: 1, }}>
            {/* <View style={{ zIndex: 1, }}>
                <View style={{ backgroundColor: '#1F2123', width: '100%', height: 'auto', paddingTop: 60, paddingBottom: 1, justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 15, }}>
                    <View style={{ backgroundColor: '#1F2123', width: '100%', height: 'auto', justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', }}>
                        <View style={{ backgroundColor: '#1F2123', display: 'flex', flexDirection: 'row', paddingLeft: 20, alignItems: 'center', gap: 5, }}>
                            <View style={{ backgroundColor: '#F3B919', paddingHorizontal: 14, borderRadius: 5, alignItems: 'center', }}>
                                <Text style={{ fontSize: 25, fontWeight: '900', color: '#22221F', }}>M</Text>
                            </View>
                            <Text style={{ color: '#FFFFFF', fontSize: 25, fontWeight: 'bold', }}>Muvi</Text>
                        </View>

                        <View style={{ backgroundColor: '#1F2123', gap: 20, width: 'auto', alignItems: 'center', paddingRight: 20, display: 'flex', flexDirection: 'row', paddingBottom: 7, paddingTop: 6, justifyContent: 'flex-end', }}>
                            <Feather name="bookmark" style={{ color: '#ECEEF0', fontSize: 20, }} />
                            <Fontisto name="bell" style={{ color: '#ECEEF0', fontSize: 20 }} />
                        </View>
                    </View>


                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 45, alignItems: 'center', justifyContent: 'center', paddingLeft: 20, display: 'flex', flexDirection: 'row', }}>
                        {genresHome.map((genreItem, index) => (
                            <HeaderHome key={index}
                                genre={genreItem.name}
                            />
                        ))}
                    </ScrollView >
                </View>
            </View> */}
            <ScrollView style={{ flex: 1, flexGrow: 1, paddingBottom: 20, height: 'auto', backgroundColor: lightMode?'#1A1C1E':'white', }}>
                <SafeAreaView style={{ backgroundColor: lightMode?'#26282C':'white', flex: 1 }}>

                    <View style={{ display: 'flex', flexDirection: 'column', }}>
                    <StatusBar style={lightMode ? 'light' : 'dark'} />


                        {/*start middle Section */}
                        <View style={{ backgroundColor: lightMode?'#26282C':'white', height: 'auto', width: '100%', alignItems: 'flex-start', paddingLeft: 20, paddingTop: 20, gap: 20, paddingBottom: -5 }}>

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
                                    <Text style={{ color: lightMode?'white':'black', fontSize: 22, fontWeight: 500, }}>New Release</Text>
                                    <Text style={{ color: lightMode?'white':'black', fontWeight: 100, fontSize: 13, }}>View More</Text>
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
                                    <Text style={{ color: lightMode?'white':'black', fontSize: 22, fontWeight: 500, }}>Made for you</Text>
                                    <Text style={{ color: lightMode?'white':'black', fontWeight: 100, fontSize: 13, }}>View More</Text>
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
                        <View style={{ height: 'auto', backgroundColor: lightMode?'#1A1C1E':'white', paddingBottom: 50, width: '100%', gap: 10, paddingTop: 10, paddingRight: 20, paddingLeft: 20, }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 'auto', width: '100%', justifyContent: 'space-between', }}>
                                <Text style={{ color: lightMode?'white':'black', fontSize: 22, fontWeight: 500, }}>Popular on <Text style={{ color: lightMode?'#FED032':'orange', }}>Muvi</Text> </Text>
                                <Text style={{ color: lightMode?'white':'black', fontWeight: 100, fontSize: 13, }}>View More</Text>
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