import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDA3MDQ0OTE0Y2EwZjkzNDY0MjIxZjYxMmQ1OWZhNSIsInN1YiI6IjY1ZDg2ZDQyYTI4NGViMDEyZjg3OTIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5GE0TQ0QzjxJEJ-YCTphGe6isMUhYtEz1Gey066mdYw'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => {
        console.log(response); // Log the API response for troubleshooting
        setMovies(response.results || []);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <ScrollView>
      {movies.map(movie => (
        <View key={movie.id} style={{ margin: 10 }}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
            style={{ width: 200, height: 300 }}
          />
          <Text style={{ color: 'white', textAlign: 'center' }}>{movie.title}</Text>
          <Text style={{ color: 'white', textAlign: 'center' }}>{movie.release_date}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default MovieList;
