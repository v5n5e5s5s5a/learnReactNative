import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { TextInput, IconButton } from "react-native-paper";
import { BrowseMoviesVertical, ListComponent } from "./Components";

export const Search = ({ navigation }) => {
    const [searchText, setSearchText] = useState("");
    const [initialSearchStatus, setInitialSearchStatus] = useState(false);
    const [moviesSearch2, setMoviesSearch2] = useState([]);
    const [searchedResult, setSearchedResult] = useState([]);
    const [genres, setGenres] = useState([]);

    const handleImagePress = (id, title, overview) => {
        navigation.navigate("Action", {
            movieid: id,
            movieTitle: title,
            movieOverview: overview,
        });
    };

    const handleImagePressTV = (id, name, overview) => {
        navigation.navigate("ActionTV", {
            movieid: id,
            movieName: name,
            movieOverview: overview,
        });
    };

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDA3MDQ0OTE0Y2EwZjkzNDY0MjIxZjYxMmQ1OWZhNSIsInN1YiI6IjY1ZDg2ZDQyYTI4NGViMDEyZjg3OTIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5GE0TQ0QzjxJEJ-YCTphGe6isMUhYtEz1Gey066mdYw",
        },
    };

    const fetchMovies = () => {
        fetch(
            "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
            options
        )
            .then((response) => response.json())
            .then((response) => {
                setMoviesSearch2(response.results);
            })
            .catch((err) => console.error(err));
    };

    const fetchSearchResults = () => {
        if (searchText.trim() === "") {
            setInitialSearchStatus(false);
            return;
        }

        fetch(
            `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`,
            options
        )
            .then((response) => response.json())
            .then((response) => {
                setSearchedResult(response.results);
                setInitialSearchStatus(true);
            })
            .catch((err) => console.log(err));
    };

    const fetchGenres = () => {
        fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
            .then((response) => response.json())
            .then((response) => {
                setGenres(response.genres);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        fetchMovies();
        fetchGenres();
    }, []);

    const handleSearchInputChange = (text) => {
        setSearchText(text);
        setInitialSearchStatus(false);
    };

    useEffect(() => {
        fetchSearchResults();
    }, [searchText]);

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    backgroundColor: "#1F2123",
                    height: "auto",
                    width: "100%",
                    paddingHorizontal: 20,
                    paddingTop: 45,
                    paddingBottom: 6,
                }}
            >
                <TextInput
                    theme={{
                        colors: {
                            primary: "#FCD130",
                        },
                        roundness: 8,
                    }}
                    textColor="white"
                    style={{
                        width: "100%",
                        backgroundColor: "#303234",
                        height: 40,
                        borderRadius: 8,
                    }}
                    height
                    underlineColor="#1F2123"
                    placeholder="Search"
                    placeholderTextColor={"#A2A4A5"}
                    right={
                        <TextInput.Icon
                            icon={"magnify"}
                            color={"#A2A4A5"}
                            onPress={() => setSearchText("")}
                        />
                    }
                    onChangeText={handleSearchInputChange}
                    value={searchText}
                />
            </View>
            <ScrollView
                style={{
                    flex: 1,
                    flexGrow: 1,
                    paddingBottom: 20,
                    height: "auto",
                    backgroundColor: "#1A1C1E",
                }}
            >
                {!initialSearchStatus ? (
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                            backgroundColor: "#26282C",
                            height: "auto",
                            width: "100%",
                            paddingHorizontal: 20,
                            paddingBottom: 20,
                            paddingTop: 10,
                        }}
                    >
                        <Text style={{ color: "#A2A4A5" }}>Suggestions</Text>
                        {moviesSearch2.map((movie, index) => (
                            <BrowseMoviesVertical
                                key={index}
                                movie={movie}
                                onPressImage={() => {
                                    handleImagePressTV(movie.id, movie.name, movie.overview);
                                }}
                            />
                        ))}
                    </View>
                ) : (
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                            backgroundColor: "#26282C",
                            height: "auto",
                            width: "100%",
                            paddingHorizontal: 20,
                            paddingBottom: 150,
                            paddingTop: 20,
                        }}
                    >
                        <Text style={{ color: "#A2A4A5" }}>{searchText}</Text>
                        {searchedResult.map((result, index) => (
                            <ListComponent
                                key={index}
                                movieLis={result}
                                Genre={genres}
                                onPressImage={() => {
                                    handleImagePress(result.id, result.title, result.overview);
                                }}
                            />
                        ))}
                    </View>
                )}
            </ScrollView>
        </View>
    );
};
