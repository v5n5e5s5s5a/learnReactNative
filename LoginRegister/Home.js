import { StatusBar } from "expo-status-bar";
import { TextInput, Icon, IconButton } from "react-native-paper";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { HomeStyles } from "./HomeStyles";
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Octicons from "react-native-vector-icons/Octicons"
import Feather from "react-native-vector-icons/Feather"
import React from "react";

export const Home = ({ navigation }) => {
    return (
        <View style={HomeStyles.body}>
            <ScrollView>
                <StatusBar style="auto" />
                <View style={HomeStyles.head}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                        <IconButton icon={'arrow-left'}  onPress={() => navigation.navigate('Login')}/>
                        <Text style={HomeStyles.homeWord}>Home</Text>
                    </View>

                    <View style={HomeStyles.headIcons}>
                        <View style={HomeStyles.PriceAlert}>
                            <TouchableOpacity style={HomeStyles.PriceAlertTouch}>
                                <MaterialIcons name="bolt" style={HomeStyles.PriceAlertIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={HomeStyles.Convert}>
                            <TouchableOpacity style={HomeStyles.ConvertTouch}>
                                <AntDesign name="swap" style={HomeStyles.ConvertIcon} />
                            </TouchableOpacity>

                        </View>
                        <View style={HomeStyles.Copy}>
                            <TouchableOpacity style={HomeStyles.CopyTouch} >
                                <Image source={require('../assets/copy.jpeg')} style={HomeStyles.CopyIcon} />
                                {/* <Feather name="square" style={HomeStyles.CopyIcon}/> */}
                            </TouchableOpacity>
                        </View>
                        <View style={HomeStyles.Star}>
                            <TouchableOpacity style={HomeStyles.StarTouch}>
                                <MaterialIcons name="star-border-purple500" style={HomeStyles.StarIcon} />
                            </TouchableOpacity>
                        </View>

                        <View style={HomeStyles.firstWord}>
                            <Text>Price Alert</Text>
                            <Text>Convert</Text>
                            <Text>Compare</Text>
                            <Text>Watchlist</Text>
                        </View>
                    </View>

                </View>

                <View style={HomeStyles.middle}>
                    <Text style={HomeStyles.walletWord}>Your Wallet</Text>

                    <ScrollView contentContainerStyle={HomeStyles.horizontalSV} showsHorizontalScrollIndicator={false} horizontal>

                        <View style={HomeStyles.scroll1}>
                            <View style={HomeStyles.money}>
                                <Text style={HomeStyles.neo}>Neo</Text>
                                <Text style={HomeStyles.neoNumbers}>NEO 0.2124</Text>
                                <Text style={HomeStyles.neoMoney}>$32,128.80</Text>
                            </View>
                            <View style={HomeStyles.greenIcon}>
                                <TouchableOpacity style={HomeStyles.neoTouch}>
                                    <Image source={require('../assets/neo.jpeg')} style={HomeStyles.neoLogo} />
                                </TouchableOpacity>
                                <TouchableOpacity style={HomeStyles.percent}>
                                    <IconButton icon={'chevron-down'} iconColor="#DB7388" style={HomeStyles.dropdown} />
                                    <Text style={HomeStyles.percentNum}>2.5%</Text>
                                </TouchableOpacity>
                                {/* vechain */}
                                {/* chevron-down */}
                            </View>
                        </View>

                        <View style={HomeStyles.scroll1}>
                            <View style={HomeStyles.money}>
                                <Text style={HomeStyles.neo}>Vechain</Text>
                                <Text style={HomeStyles.neoNumbers}>VEC 0.2124</Text>
                                <Text style={HomeStyles.neoMoney}>$32,128.80</Text>
                            </View>
                            <View style={HomeStyles.greenIcon}>
                                <TouchableOpacity style={HomeStyles.vechainTouch}>
                                    <Image source={require('../assets/vechain.png')} style={HomeStyles.neoLogo} />
                                </TouchableOpacity>
                                <TouchableOpacity style={HomeStyles.percent}>
                                    <IconButton icon={'chevron-down'} iconColor="blue" style={HomeStyles.dropdown} />
                                    <Text style={HomeStyles.percentNum}>2.5%</Text>
                                </TouchableOpacity>
                                {/* vechain */}
                                {/* chevron-down */}
                            </View>
                        </View>

                        <View style={HomeStyles.scroll1}>
                            <View style={HomeStyles.money}>
                                <Text style={HomeStyles.neo}>Neo</Text>
                                <Text style={HomeStyles.neoNumbers}>NEO 0.2124</Text>
                                <Text style={HomeStyles.neoMoney}>$32,128.80</Text>
                            </View>
                            <View style={HomeStyles.greenIcon}>
                                <TouchableOpacity style={HomeStyles.neoTouch}>
                                    <Image source={require('../assets/neo.jpeg')} style={HomeStyles.neoLogo} />
                                </TouchableOpacity>
                                <TouchableOpacity style={HomeStyles.percent}>
                                    <IconButton icon={'chevron-down'} iconColor="#DB7388" style={HomeStyles.dropdown} />
                                    <Text style={HomeStyles.percentNum}>2.5%</Text>
                                </TouchableOpacity>
                                {/* vechain */}
                                {/* chevron-down */}
                            </View>
                        </View>

                    </ScrollView>
                </View>

                <View style={HomeStyles.trendingDiv}>
                    <Text style={HomeStyles.trendingWord}>Trending</Text>

                    <View style={HomeStyles.all}>
                        <View style={HomeStyles.twoBitcoinDivs}>
                            <IconButton icon={'currency-btc'} size={35} iconColor="#F7961A" style={HomeStyles.bitcoinIcon} />
                            <View style={HomeStyles.bitcoinWordDiv}>
                                <Text style={HomeStyles.bitcoinWord}>Bitcoin</Text>
                                <Text style={HomeStyles.bitcoinMoney}>$32,128.80</Text>
                                <Text style={HomeStyles.btc}>BTC</Text>
                                <TouchableOpacity style={HomeStyles.percent2}>
                                    <IconButton icon={'chevron-up'} iconColor="#7CC39D" style={HomeStyles.dropup} />
                                    <Text style={HomeStyles.percentNum2}>2.5%</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={HomeStyles.twoBitcoinDivs}>
                            <IconButton icon={'currency-btc'} size={35} iconColor="#D04E80" style={HomeStyles.bytecoinIcon} />
                            <View style={HomeStyles.bitcoinWordDiv}>
                                <Text style={HomeStyles.bitcoinWord}>Bytecoin</Text>
                                <Text style={HomeStyles.bitcoinMoney}>$15,128.80</Text>
                                <Text style={HomeStyles.btc}>BCN</Text>
                                <TouchableOpacity style={HomeStyles.percent2}>
                                    <IconButton icon={'chevron-up'} iconColor="#7CC39D" style={HomeStyles.dropup} />
                                    <Text style={HomeStyles.percentNum2}>2.2%</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={HomeStyles.last}>
                    <IconButton icon={'home-outline'} size={30} style={HomeStyles.homeIcon} />
                    <IconButton icon={'chart-bar'} size={30} iconColor="#E1E1E5" style={HomeStyles.homeIcon} />
                    <IconButton icon={'wallet-outline'} size={30} iconColor="#E1E1E5" style={HomeStyles.homeIcon} />
                    <IconButton icon={'script-outline'} size={30} iconColor="#E1E1E5" style={HomeStyles.homeIcon} />
                    <IconButton icon={'account-arrow-left-outline'} size={30} iconColor="#E1E1E5" style={HomeStyles.accountIcon}  onPress={() => navigation.navigate('Login')}/>
                </View>
            </ScrollView>
        </View>
    )
}