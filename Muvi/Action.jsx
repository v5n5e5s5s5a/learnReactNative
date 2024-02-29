import { StatusBar } from "expo-status-bar";
import { View, Text, ImageBackground, Image, Dimensions, Pressable, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { IconButton } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"

import {
    Filter, FilterName, MovieBrowseArray, MovieBrowseArray2, BrowseMovies,
    BrowseMoviesVertical, VerticalMovieBrowseArray, BottomNavigation, Header, BrowseMoviesAction
} from "./Components";


const height = Dimensions.get("screen")
const width = Dimensions.get("screen")

export const Action = ({ navigation }) => {

    const [movies, setMovies] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDA3MDQ0OTE0Y2EwZjkzNDY0MjIxZjYxMmQ1OWZhNSIsInN1YiI6IjY1ZDg2ZDQyYTI4NGViMDEyZjg3OTIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5GE0TQ0QzjxJEJ-YCTphGe6isMUhYtEz1Gey066mdYw'
        }
    };

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
            <StatusBar style="light" />
            <SafeAreaView style={{ backgroundColor: '#26282C', flex: 1, paddingTop: 40, }}>

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 20, paddingBottom: 10,}}>
                    <AntDesign name="arrowleft" size={25} color={'#E9D160'} onPress={()=> navigation.navigate('Home')} />
                    <Text style={{ color: 'white', fontSize: 17, fontWeight: 700, }}>Action</Text>
                </View>

                <ScrollView style={{ flex: 1, flexGrow: 1, paddingBottom: 20, height: 'auto', backgroundColor: '#1A1C1E', }}>

                    <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#26282C', width: '100%', paddingHorizontal: 20, paddingBottom: 10, }}>
                        
                        <View style={{ height: 20, }}></View>

                        <View style={{ width: '100%', }}>
                            <Image style={{ width: '100%', height: 170, }} source={require('../assets/muviImages/jumanji.jpg')} />
                            <Ionicons name="pause" style={{ position: 'absolute', color: '#E9D160', bottom: '2%', left: '1%', }} size={20} />
                            {/* <View style={{width: 40, height: 60, position: 'absolute', color: '#E9D160',}}><Text>dfghjdfghjkmnbvcbhjmmnbvcghjmnbgvc</Text></View> */}
                        </View>

                        <View style={{ height: 15, }}></View>
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 5, width: '85%', backgroundColor: 'transparent', }}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', }}>Jumanji: The Next Level</Text>
                            <Text style={{ color: '#A8AAAE', fontSize: 13, fontWeight: 200, }}>When the world is under attack from creatures who hunt their human prey by sound, a teenager</Text>
                        </View>

                        <View style={{ height: 20, }}></View>

                        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, }}>
                            <Pressable style={{ display: 'flex', flexDirection: 'row', gap: 3, backgroundColor: '#FDD130', alignItems: 'center', width: '48%', paddingVertical: 10, paddingLeft: 20, borderRadius: 5, }}>
                                <Feather name="play" size={15} color={'#1F2123'}/>
                                <Text style={{ color: '#1F2123', }}>Play</Text>
                            </Pressable>

                            <Pressable style={{ display: 'flex', flexDirection: 'row', gap: 3, backgroundColor: 'transparent', alignItems: 'center', borderColor: '#5F6165', borderWidth: 1, width: '49%', paddingVertical: 10, paddingLeft: 20, borderRadius: 5, }}>
                                <Feather name="plus" size={15} color={'#FDD130'} />
                                <Text style={{ color: 'white', }}>My List</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'column', }}>
                        {/*start middle Section */}
                        <View style={{ backgroundColor: '#26282C', height: 'auto', width: '100%', alignItems: 'flex-start', paddingLeft: 20, paddingTop: 20, gap: 20, paddingBottom: -5 }}>

                            {/* Start of Horizontal Movie Broswe */}
                            <View style={{ display: 'flex', flexDirection: 'column', height: 'auto', backgroundColor: 'transparent', height: 200, width: '100%', gap: 8, }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 'auto', width: '100%', justifyContent: 'space-between', paddingRight: 20, }}>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 500, }}>U.S Action Movies</Text>
                                </View>


                                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', height: 'auto', flexDirection: 'row', gap: 10, }}>
                                    {movies.map((movie, index) => (
                                        <View key={index}>
                                            <BrowseMoviesAction
                                                movie={movie}
                                            />
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>

                            <View style={{ display: 'flex', flexDirection: 'column', height: 'auto', backgroundColor: 'transparent', height: 200, width: '100%', gap: 8, marginTop: -22, }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 'auto', width: '100%', justifyContent: 'space-between', paddingRight: 20, }}>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 500, }}>Muvi Original Action</Text>
                                </View>

                                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ display: 'flex', height: 'auto', flexDirection: 'row', gap: 10, }}>
                                    {movies2.map((movie, index) => (
                                        <BrowseMoviesAction key={index}
                                            movie={movie}
                                        />
                                    ))}
                                </ScrollView>
                            </View>
                            {/* End of Horizontal Movie Broswe */}
                        </View>
                        {/*end of middle Section */}

                    </View>
                </ScrollView>
            </SafeAreaView>
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
