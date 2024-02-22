import React,{ useEffect, useState } from "react";
import { View,Text } from "react-native";

//Start of Filter Component
export const FilterName = [
    {
        name: 'Popular Today',
    },
    {
        name: 'Marvel',
    },
    {
        name: 'Fans Choice',
    },
    {
        name: 'Star Wars',
    },
    {
        name: 'Marvel',
    },
]
export function Filter({ name }) {
    return (

        <View style={{ width: 'auto', borderRadius: 7, height: 'auto', backgroundColor: 'transparent', borderWidth: 1, borderColor: '#BFC0C4', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 3, display: 'flex', flexDirection: 'row', }}>
            <Text style={{ color: '#BFC0C4', fontSize: 16, }}>{name}</Text>
        </View>
    )
}
//End of Filter Component

//Start of Movie Broswe Component

export const MovieBrowseArray = [
    {
        image: require('../assets/muviImages/mulanCover.jpg'),
        rate: '8.8',
    },
    {
        image: require('../assets/muviImages/theWayBackCover.jpg'),
        rate: '8.8',
    },
    {
        image: require('../assets/muviImages/knivesOutCover.jpg'),
        rate: '8.8',
    },
]

export const MovieBrowseArray2 = [
    {
        image: require('../assets/muviImages/brahmsCover.jpg'),
        rate: '8.8',
    },
    {
        image: require('../assets/muviImages/murderMysteryCover.jpg'),
        rate: '8.8',
    },
    {
        image: require('../assets/muviImages/glassOnionCover.jpg'),
        rate: '8.8',
    },
]

export const BrosweMovies = ({image, rate, title, viewMore}) => {
    return(
        <View style={{display: 'flex', flexDirection: 'column', gap: 10,}}>

            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',}}>
                <Text>{title}</Text>
                <Text>{viewMore}</Text>
            </View>

            <View style={{display: 'flex', flexDirection: 'row',}}></View>
        </View>
    )
}

//End of Movie Broswe Component