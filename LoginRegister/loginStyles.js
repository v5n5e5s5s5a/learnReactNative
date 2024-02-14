import { StyleSheet } from "react-native";

export const LoginStyles = StyleSheet.create({
    body: {
        // backgroundColor: '#9F9DF3',
        backgroundColor: '#F3F5F6',
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 40,
    },
    loginLogo: {
        width: '100%',
    },
    loginDiv: {
        backgroundColor: '#F3F5F6',
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '6%',
        borderWidth: 0,
    },
    loginWord: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    username: {
        width: '100%',
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: '4%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderWidth: 0,
        height: 65,
    },
    userIcon: {
        backgroundColor: '#FDE8EA', 
        marginLeft: '90%',
    },
    password: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: '4%',
        borderRadius: 25,
        borderBottomWidth: 0,
        height: 65,
    },
    passwordIcon: {
        backgroundColor: '#E6ECFC', 
        marginLeft: '90%',
    },

    submit: {
        marginTop: 20,
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    forgotpass: {
        color: '#818FFC',
        fontSize: 15,
    },
    submitTouch:{
        backgroundColor: '#191B32',
        width: '40%',
        height: 55,
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitLogin: {
        color: 'white',
        fontSize: 16,
    },

    bottomIcons: {
        // backgroundColor: 'white',
        marginTop: 100,
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    fbTouch: {
        width: '15%',
        height: 50,
        alignItems: 'center',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
    },
    fb: {
        color: '#216CD3',
        fontSize: 30,
    },
    google: {
        color: '#EA523D',
        fontSize: 30,
    },
    apple: {
        color: '#15131E',
        fontSize: 30,
    }
})