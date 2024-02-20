import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Image, ScrollView, FlatList } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Octicons from "react-native-vector-icons/Octicons"
import Feather from "react-native-vector-icons/Feather"
import { TextInput, Icon, IconButton } from "react-native-paper";
import React from "react";
import { SearchClothesStyles } from "./SearchClothesStyles";

export const SearchClothes = () => {

    const images = [
        {
            imageSource: require('../assets/dresses.jpg'),
            rank: '#1 Best Seller',
            name: 'Dresses',
            price: '$46.00',
        },
        {
            imageSource: require('../assets/jeans.jpg'),
            rank: '#2 Best Seller',
            name: 'GJ Jeans',
            price: '$46.00',
        },
        {
            imageSource: require('../assets/pinkTish.jpg'),
            rank: '#3 Best Seller',
            name: 'Damage',
            price: '$46.00',
        },
    ];

    function FirstImages({ rank, name, price, imageSource }) {
        return (
            <View style={{ backgroundColor: '#FFFFFF', height: 150, width: 250, position: 'relative', }}>
                <Image source={imageSource} style={{ width: '100%', height: '100%', borderRadius: 20 }} />
                <Text style={SearchClothesStyles.rank}>{rank}</Text>
                <View style={SearchClothesStyles.grayDiv}>
                    <Text style={SearchClothesStyles.name}>{name}</Text>
                    <Text style={SearchClothesStyles.price}>{price}</Text>
                </View>
            </View>
        );
    }


    const MenImages = [
        {
            imageSource1: require('../assets/whiteTish.jpg'),
            icon: 'cards-heart-outline',
            shirtName: 'White T-shirt',
            shirtPrice: '$45',
        },
        {
            imageSource1: require('../assets/pinkGuy.jpg'),
            icon: 'cards-heart-outline',
            shirtName: 'Purple T-shirt',
            shirtPrice: '$47',
        },
        {
            imageSource1: require('../assets/sweatPants.jpg'),
            icon: 'cards-heart-outline',
            shirtName: 'Blue Pants',
            shirtPrice: '$45',
        },
        {
            imageSource1: require('../assets/blackSweatPants.jpg'),
            icon: 'cards-heart-outline',
            shirtName: 'Black Pants',
            shirtPrice: '$45',
        }
    ]

    function Men({ imageSource1, icon, shirtName, shirtPrice }) {
        return (
            <View style={SearchClothesStyles.menView}>
                <Image source={imageSource1} style={SearchClothesStyles.imageSource1} />
                <IconButton icon={icon} color='#AEAEAE' size={16} style={SearchClothesStyles.menIcon} />
                <Text style={{ color: '#767676', marginTop: 15, fontSize: 15 }}>{shirtName}</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 5 }}>{shirtPrice}</Text>
            </View>
        )
    }

    return (
        <View style={SearchClothesStyles.body}>
            <ScrollView>
                <StatusBar style="auto" />
                <View style={SearchClothesStyles.topAndSearch}>
                    <View style={SearchClothesStyles.top}>
                        <IconButton icon={'arrow-left'} style={SearchClothesStyles.leftArrow} />
                        <Text style={SearchClothesStyles.SearchWord}>Search</Text>
                        <IconButton icon={'tune-vertical'} color='#7D7D7D' style={SearchClothesStyles.tuneVertical} />
                    </View>

                    <View style={SearchClothesStyles.searchMenu}>
                        <TextInput
                            style={SearchClothesStyles.searchBar}
                            theme={{
                                roundness: 30
                            }}
                            underlineColor="#F7F8FD"
                            placeholder="Search ..." placeholderTextColor={'#C8CBD2'}
                            left={<TextInput.Icon icon={'magnify'} color='#C8CBD2' style={SearchClothesStyles.searchIcon} />}
                            right={<TextInput.Icon icon={'tune-variant'} color='#C8CBD2' style={SearchClothesStyles.searchIcon} />}
                        />
                    </View>
                </View>

                <ScrollView horizontal contentContainerStyle={SearchClothesStyles.firstHzScrollView} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={SearchClothesStyles.menuAllTouch}>
                        <Text style={SearchClothesStyles.menuAll1}>All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={SearchClothesStyles.menuAllTouch1}>
                        <Text style={SearchClothesStyles.menuAll}>Man</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={SearchClothesStyles.menuAllTouch1}>
                        <Text style={SearchClothesStyles.menuAll}>Woman</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={SearchClothesStyles.menuAllTouch1}>
                        <Text style={SearchClothesStyles.menuAll}>Dress</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={SearchClothesStyles.menuAllTouch1}>
                        <Text style={SearchClothesStyles.menuAll}>Baby</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={SearchClothesStyles.menuAllTouch1}>
                        <Text style={SearchClothesStyles.menuAll}>Kid</Text>
                    </TouchableOpacity>
                </ScrollView>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={SearchClothesStyles.secondHzScroll}>
                    {images.map((item, index) => (
                        <View key={index}>
                            <FirstImages
                                rank={item.rank}
                                name={item.name}
                                price={item.price}
                                imageSource={item.imageSource}
                            />
                        </View>
                    ))}
                </ScrollView>

                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 28, marginLeft: '6%', }}>Product Result(43)</Text>

                <View style={style = SearchClothesStyles.menViewOverAll}>
                    {MenImages.map((item, index) => (
                        <View key={index}>
                            <Men
                                icon={item.icon}
                                shirtName={item.shirtName}
                                shirtPrice={item.shirtPrice}
                                imageSource1={item.imageSource1}
                            />
                        </View>
                    ))}

                </View>
            </ScrollView>
        </View>
    )
}