import { StyleSheet } from "react-native";

export const imageStyles = StyleSheet.create({
    parent: {
        // backgroundColor: 'yellow',
        width: '100%',
        height: '100%',
        paddingVertical: '20%',
        paddingHorizontal: '5%',
    },
    nav: {
        // backgroundColor: 'orange',
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    arrowTouch: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1.4,
    },
    leftArrow: {
        fontSize: 25,
    },
    txttoIamge: {
        fontSize: 20,
    },
    threeDots: {
        fontSize: 20,
    },
    images: {
        // backgroundColor: 'orange',
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: 'auto',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    photo: {
        width: '48%',
        height: 200,
        borderRadius: 20,
    },
})