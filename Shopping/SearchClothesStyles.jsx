import { StyleSheet } from "react-native";

export const SearchClothesStyles = StyleSheet.create({
    top: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    SearchWord: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    searchBar: {
        backgroundColor: '#F7F8FD',
        borderRadius: 30,
        marginTop: 20,
        height: 50,
    },
    leftArrow: {
        backgroundColor: '#ECECEC',
        marginLeft: 0,
    },
    tuneVertical: {
        marginRight: -9,
    },
    firstHzScrollView: {
        backgroundColor: 'white', 
        height: 55, 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        gap: 20, 
        marginTop: 20,
        marginLeft: '6%',
    },
    menuAllTouch: {
        paddingHorizontal: 23,
        paddingVertical: 8,
        backgroundColor: '#C49D5D', 
        borderWidth: 2, 
        borderColor: '#F6F6F6', 
        height: 40, 
        width: 'auto',
        borderRadius: 20,
    },
    menuAllTouch1: {
        paddingHorizontal: 23,
        paddingVertical: 8, 
        borderWidth: 2, 
        borderColor: '#F6F6F6', 
        height: 40, 
        width: 'auto',
        borderRadius: 20,
    },
    menuAll1: {
        fontSize: 15,
        color: 'white',
    },
    menuAll: {
        fontSize: 15,
        color: '#7C7C7C',
    },
    rank: {
        position: 'absolute',
        backgroundColor: '#C69A5C',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 20,
        color: 'white',
        top: '8%',
        left: '6%',
    },
    grayDiv: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        bottom: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '25%',
        alignItems: 'center',
        paddingHorizontal: '5%',
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
    },
    name: {
        color: '#E1D2C3',
    },
    price: {
        color: '#E1D2C3',
    },
    menViewOverAll: {
        width: '100%', 
        backgroundColor: '#FFFFFF', 
        display:'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        gap: 20, 
        paddingLeft: '6%', 
        paddingRight: '6%',
        marginTop: 25,
    },
    menView: {
        backgroundColor: '#FFFFFF',
        width: 158,
        height: 260,
        display:'flex', 
        flexDirection: 'column', 
    },
    imageSource1: { 
        width: '100%', 
        height: '70%', 
        resizeMode: 'cover', 
        borderRadius: 15,
    },
    menIcon: {
        position: 'absolute', 
        top: '2%', 
        right: '2%',
        backgroundColor: 'white',
    }
})