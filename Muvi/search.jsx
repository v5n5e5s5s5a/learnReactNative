import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, ActivityIndicator, Dimensions, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { IconButton, TextInput } from "react-native-paper";
import { BottomNavigation, BrowseMoviesVertical, ListComponent } from "./Components";

export const Search = ({ navigation }) => {

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

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDA3MDQ0OTE0Y2EwZjkzNDY0MjIxZjYxMmQ1OWZhNSIsInN1YiI6IjY1ZDg2ZDQyYTI4NGViMDEyZjg3OTIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5GE0TQ0QzjxJEJ-YCTphGe6isMUhYtEz1Gey066mdYw'
        }
    };

    const [moviesSearch2, setMoviesSearch2] = useState([]);
    const fetchMovies = () => {

        fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => {
                setMoviesSearch2(response.results)
            })
            .catch(err => console.error(err));

    };
    useEffect(() => {
        fetchMovies()
    }, [])

    const [searchText, setSearchText] = useState([])
    const [initialSearchStatus, setInitialSearchStatus] = useState(false)
    const [searchedResult, setSearchedResult] = useState([])

    const handleSearchInputChange = (text) => {
        setSearchText(text);

        if (text === '') {
            setInitialSearchStatus(false)
        } else {
            fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`, options)
                .then(response => response.json())
                .then(response => {
                    setSearchedResult(response.results)
                    setInitialSearchStatus(true);
                })
                .catch(err => console.log(err));
            console.log(searchedResult);
        }
    }


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

    const height = Dimensions.get("screen")
    const width = Dimensions.get("screen")

    return (
        <View style={{ flex: 1, }}>
            <View style={{ backgroundColor: '#1F2123', height: 'auto', width: '100%', paddingHorizontal: 20, paddingTop: 45, paddingBottom: 6, }}>
                <TextInput
                    theme={{
                        colors: {
                            primary: '#FCD130',

                        },
                        roundness: 8,
                    }}
                    textColor="white"
                    style={{ width: '100%', backgroundColor: '#303234', height: 40, borderRadius: 8, }}
                    height
                    underlineColor="#1F2123"
                    placeholder="Search" placeholderTextColor={'#A2A4A5'}
                    right={<TextInput.Icon icon={'magnify'} color={'#A2A4A5'} />}
                    onChangeText={handleSearchInputChange}
                />
            </View>
            <ScrollView style={{ flex: 1, flexGrow: 1, paddingBottom: 20, height: 'auto', backgroundColor: '#1A1C1E', }}>
                <StatusBar style="light" />
                {!initialSearchStatus ? (
                    <View style={{ display: 'flex', flexDirection: 'column', gap: 10, backgroundColor: '#26282C', height: 'auto', width: '100%', paddingHorizontal: 20, paddingBottom: 20, paddingTop: 10, }}>
                        <Text style={{ color: '#A2A4A5', }}>Search result for Disney</Text>
                        {moviesSearch2.map((movie, index) => (
                            <BrowseMoviesVertical key={index}
                                movie={movie}
                                onPressImage={handleImagePress}
                            />
                        ))}
                    </View>
                ) : (
                    <View style={{ display: 'flex', flexDirection: 'column', gap: 10, backgroundColor: '#26282C', height: 'auto', width: '100%', paddingHorizontal: 20, paddingBottom: 150, paddingTop: 20, }}>
                        {searchedResult.map((result, index) => (
                            <ListComponent key={index}
                                movieLis={result}
                                Genre={genres}
                            />
                        ))}
                    </View>
                )}
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
