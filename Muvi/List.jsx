import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, ActivityIndicator, Dimensions, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { IconButton, TextInput } from "react-native-paper";
import { BottomNavigation, ListComponent } from "./Components";

export const List = ({ navigation }) => {
    const handleImagePress = () => {
        navigation.navigate('Action');
    };

    const handleSearchPress = () => {
        navigation.navigate('Search');
    };

    const handleListPress = () => {
        navigation.navigate('List');
    };

    const handleProfilePress = () => {
        navigation.navigate('Profile');
    };

    const [moviesList, setMoviesList] = useState([]);
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
                setMoviesList(response.results)
            })
            .catch(err => console.error(err));

    };
    useEffect(() => {
        fetchMovies()
    }, [])

    const [genres, setGenres] = useState([]);
    const fetchGenres = () => {

        fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setGenres(response.genres)

            })
            .catch(err => console.error(err));
            console.log(setGenres);

    };
    useEffect(() => {
        fetchGenres()
    }, [])
    return (
        <View>

            {/* start of Header */}
            <View style={{ zIndex: 1, }}>
                <View style={{ backgroundColor: '#1F2123', width: '100%', height: 'auto', paddingTop: 60, paddingBottom: 1, justifyContent: 'space-between', alignItems: 'Flex-start', display: 'flex', flexDirection: 'column', gap: 15, }}>
                    <View style={{ backgroundColor: '#1F2123', width: '100%', height: 'auto', justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', }}>
                        <View style={{ backgroundColor: '#1F2123', display: 'flex', flexDirection: 'row', paddingLeft: 20, alignItems: 'center', gap: 5, }}>
                            <View style={{ backgroundColor: '#F3B919', paddingHorizontal: 14, borderRadius: 5, alignItems: 'center', }}>
                                <Text style={{ fontSize: 25, fontWeight: '900', color: '#22221F', }}>M</Text>
                            </View>
                            <Text style={{ color: '#FFFFFF', fontSize: 25, fontWeight: 'bold', }}>Muvi</Text>
                        </View>

                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 45, paddingLeft: 20, display: 'flex', flexDirection: 'row', }}>
                        <View style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                            <Text style={{ fontSize: 17, color: '#FCCF33', }}>My List</Text>
                            <View style={{ backgroundColor: '#FCCF33', height: 4, width: '75%', borderRadius: 15, }}></View>
                        </View>
                        <View style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                            <Text style={{ fontSize: 17, color: '#E0E2E4', }}>Downloaded</Text>
                            <View style={{ backgroundColor: 'transparent', height: 4, width: '75%', borderRadius: 15, }}></View>
                        </View>
                    </ScrollView >
                </View>
            </View>
            {/* end of Header */}
            <ScrollView style={{ backgroundColor: '#26282C', }}>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 10, backgroundColor: '#26282C', height: 'auto', width: '100%', paddingHorizontal: 20, paddingBottom: 150, paddingTop: 20, }}>
                    {moviesList.map((movie, index) => (
                        <ListComponent key={index}
                            movieLis={movie}
                            Genre={genres}
                            onPressImage={handleImagePress}
                        />
                    ))}
                    
                </View>
            </ScrollView>
            {/* <BottomNavigation
                iconColorHome={'#C4C6C7'}
                iconColorSearch={'#E5C053'}
                iconColorList={'#C4C6C7'}
                iconColorProfile={'#C4C6C7'}
                onSearchPress={handleSearchPress}
                onHomePress={handleHomePress}
                onListPress={handleListPress}
            /> */}
        </View>
    )
}