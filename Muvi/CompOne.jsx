import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { IconButton } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto"

//start of header component
export const Header = () => {

    const [showSignInSuccess, setShowSignInSuccess] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowSignInSuccess(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);
    return(
        <View style={{ zIndex: 1, }}>
        {showSignInSuccess && (
            <View style={{ position: 'absolute', zIndex: 1, backgroundColor: '#34B452', width: '100%', height: 'auto', justifyContent: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 25, paddingBottom: 10, }}>
                <Text style={{ color: 'white', fontSize: 15, }}>Sign in successful</Text>
            </View>
        )}

        <View style={{ backgroundColor: '#1F2123', width: '100%', height: 'auto', paddingTop: 60, paddingBottom: 1, justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: 15, }}>
            <View style={{ backgroundColor: '#1F2123', width: '100%', height: 'auto', justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', }}>
                <View style={{ backgroundColor: '#1F2123', display: 'flex', flexDirection: 'row', paddingLeft: 20, alignItems: 'center', gap: 5, }}>
                    <View style={{ backgroundColor: '#F3B919', paddingHorizontal: 15, borderRadius: 5, alignItems: 'center', }}>
                        <Text style={{ fontSize: 25, fontWeight: '900', color: '#22221F', }}>M</Text>
                    </View>
                    <Text style={{ color: '#FFFFFF', fontSize: 25, fontWeight: 'bold', }}>Muvi</Text>
                </View>

                <View style={{ backgroundColor: '#1F2123', gap: 20, width: 'auto', alignItems: 'center', paddingRight: 20, display: 'flex', flexDirection: 'row', paddingBottom: 7, paddingTop: 6, justifyContent: 'flex-end', }}>
                    <Feather name="bookmark" style={{ color: '#ECEEF0', fontSize: 20, }} />
                    <Fontisto name="bell" style={{ color: '#ECEEF0', fontSize: 20 }} />
                </View>
            </View>
            <ScrollView horizontal contentContainerStyle={{ gap: 45, alignItems: 'center', justifyContent: 'center', paddingLeft: 20, display: 'flex', flexDirection: 'row', }}>
                <View style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                    <Text style={{ fontSize: 16, color: '#FCCF33', }}>Featured</Text>
                    <View style={{ backgroundColor: '#FCCF33', height: 4, width: '75%', borderRadius: 15, }}></View>
                </View>
                <View style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                    <Text style={{ fontSize: 16, color: '#E6E8E9', }}>series</Text>
                    <View style={{ backgroundColor: 'transparent', height: 4, width: '75%', borderRadius: 15, }}></View>
                </View>
                <View style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                    <Text style={{ fontSize: 16, color: '#E6E8E9', }}>films</Text>
                    <View style={{ backgroundColor: 'transparent', height: 4, width: '75%', borderRadius: 15, }}></View>
                </View>
                <View style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                    <Text style={{ fontSize: 16, color: '#E6E8E9', }}>origin</Text>
                    <View style={{ backgroundColor: 'transparent', height: 4, width: '75%', borderRadius: 15, }}></View>
                </View>
                <View style={{ backgroundColor: '#1F2123', gap: 6, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }}>
                    <Text style={{ fontSize: 16, color: '#E6E8E9', }}>Movies</Text>
                    <View style={{ backgroundColor: 'transparent', height: 4, width: '75%', borderRadius: 15, }}></View>
                </View>

            </ScrollView >

        </View>
    </View>
    )
}
//end of header component


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

        <View style={{ width: 'auto', borderRadius: 7, height: 'auto', backgroundColor: 'transparent', borderWidth: 1, borderColor: '#B4B6BA', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10,  display: 'flex', flexDirection: 'row', }}>
            <Text style={{ color: '#BFC0C4', fontSize: 14, paddingTop: 4, paddingBottom: 4,  }}>{name}</Text>
        </View>
    )
}
//End of Filter Component

//Start of Horizontal Movie Broswe Component

export const MovieBrowseArray = [
    {
        image: require('../assets/muviImages/mulanCover.jpg'),
        rate: '8.8',
    },
    {
        image: require('../assets/muviImages/theWayBackCover.jpg'),
        rate: '8.7',
    },
    {
        image: require('../assets/muviImages/knivesOutCover.jpg'),
        rate: '8.6',
    },
]

export const MovieBrowseArray2 = [
    {
        image: require('../assets/muviImages/brahmsCover.jpg'),
        rate: '8.0',
    },
    {
        image: require('../assets/muviImages/murderMysteryCover.jpg'),
        rate: '8.2',
    },
    {
        image: require('../assets/muviImages/glassOnionCover.jpg'),
        rate: '8.3',
    },
]

export const BrowseMovies = ({ image, rate,}) => {
    return (
            <View style={{ display: 'flex', flexDirection: 'row', width: 260, height: 140, backgroundColor: 'lime', borderRadius: 6,}}>
                <Image source={image} style={{ width: '100%', height:'100%', borderRadius: 6,}} />
                <View style={{ justifyContent: 'center', backgroundColor: '#F1B91A', alignItems: 'center', width: '12%', height: 'auto', position: 'absolute', borderRadius: 4, right: '4%', top: '4%',}}>
                    <Text style={{fontSize: 13, fontWeight: 500,}}>{rate}</Text>
                </View>
            </View>
    )
}
//End of Horizontal Movie Broswe Component


//Start of Vertical Movie Broswe Component

export const VerticalMovieBrowseArray = [
    {
        image: require('../assets/muviImages/starTrekCover.jpg'),
        rate: '8.4',
    },
    {
        image: require('../assets/muviImages/avengersCover.jpg'),
        rate: '8.2',
    },
    {
        image: require('../assets/muviImages/batManCover.jpg'),
        rate: '8.3',
    },
]

export const BrowseMoviesVertical = ({ image, rate,}) => {
    return (
        // borderColor: '#5D5F5F',
            <View style={{ display: 'flex', flexDirection: 'column', width: '100%', height: 200, backgroundColor: 'transparent', borderRadius: 6, borderWidth: 1, }}>
                <Image source={image} style={{ width: '100%', height:'100%', borderRadius: 6,}} />
                <View style={{ justifyContent: 'center', backgroundColor: '#F1B91A', alignItems: 'center', width: '12%', height: 'auto', position: 'absolute', borderRadius: 4, right: '4%', top: '4%',}}>
                    <Text style={{fontSize: 13, fontWeight: 500,}}>{rate}</Text>
                </View>
            </View>
    )
}
//End of Vertical Movie Broswe Component

//start of bottom navigation

export const BottomNavigation = ({iconColorHome, iconColorSearch, iconColorFolder, iconColorGrid}) => {
    return(
        <View style={{position: 'absolute', display:'flex', flexDirection: 'row', backgroundColor: '#1F2123', justifyContent: 'space-between', width: '100%', bottom: 0, paddingHorizontal: 20, paddingVertical: 10, alignItems: 'center',}}>
            <Feather  name={'home'} style={{color:iconColorHome, fontSize: 26}}/>
            <Feather  name={'search'} style={{color:iconColorSearch, fontSize: 26}}/>
            <Feather  name={'folder'} style={{color:iconColorFolder, fontSize: 26}}/>
            <Feather  name={'grid'} style={{color:iconColorGrid, fontSize: 26}}/>
        </View>
    )
}

//end of bottom navigation