import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import { design2 } from "./ShippingStyles";
import Octicons from "react-native-vector-icons/Octicons"
import Feather from "react-native-vector-icons/Feather"

export const ShippingBilling = () => {
    return (
        <View style={design2.parent}>
            <StatusBar style="auto"/>
            <View style={design2.overallHome}>
                <View style={design2.up}>
                    <View style={design2.homeDiv}>
                        <Image source={require('../assets/house.png')} style={design2.homeIcon} />
                        <Text style={design2.Home}>Home</Text>
                    </View>
                    <TouchableOpacity style={design2.pencilDiv}>
                        <Octicons name="pencil" style={design2.pencil} />
                        <Text style={design2.underscore}>_</Text>
                    </TouchableOpacity>
                </View>
                <Text style={design2.sunam}>Sunamganj</Text>
                <Text style={design2.number}>+971-50-1234567</Text>
                <View style={design2.lineBlue}></View>
                <Text style={design2.room}>Room #1 - Ground Floor, Al Najoun Building, 24 B</Text>
                <Text style={design2.street}>Street, Dubai - United Arab Emirates</Text>
            </View>

            <View style={design2.overallOffice}>
                <View style={design2.up}>
                    <View style={design2.homeDiv}>
                        <Image source={require('../assets/post-office.png')} style={design2.homeIcon} />
                        <Text style={design2.Home}>Office</Text>
                    </View>
                    <TouchableOpacity style={design2.pencilDivOffice}>
                        <Octicons name="pencil" style={design2.pencilOffice} />
                        <Text style={design2.underscoreOffice}>_</Text>
                    </TouchableOpacity>
                </View>
                <Text style={design2.sunam}>Sunamganj</Text>
                <Text style={design2.number}>+971-50-1234567</Text>
                <View style={design2.line}></View>
                <Text style={design2.room}>Room #1 - Ground Floor, Al Najoun Building, 24 B</Text>
                <Text style={design2.street}>Street, Dubai - United Arab Emirates</Text>
            </View>

            <View style={design2.addNewDiv}>
                <Text style={design2.addNew}>Add new shipping address</Text>
                <TouchableOpacity>
                    <Octicons name="diff-added" style={design2.addNewIcon} />
                </TouchableOpacity>
            </View>

            <View style={design2.infoDiv}>
                <Text style={design2.info}>Personal Info</Text>
                <View style={design2.phoneDiv}>
                    <Feather name="phone-call" style={design2.phoneIcon} />
                    <Text style={design2.bill}>Bill to the Home address</Text>
                </View>
                <View style={design2.phoneDiv}>
                    <Feather name="phone-call" style={design2.phoneIcon} />
                    <Text style={design2.bill}>07146247923</Text>
                </View>
                <View style={design2.phoneDiv}>
                    <Feather name="phone-call" style={design2.phoneIcon} />
                    <Text style={design2.bill}>quickrakibull@gmail.com</Text>
                </View>
            </View>

            <TouchableOpacity style={design2.continueDiv}>
                <Text style={design2.continue}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}
