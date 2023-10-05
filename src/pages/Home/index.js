import React from "react";

import{View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const HomePage = ({ navigation } ) => {
     
     const HandleLogin = () => {
        navigation.navigate('Login');
     }
    return(
        <View style={Style.container}>

      <TouchableOpacity style={Style.button} onPress={HandleLogin}>
        <Text style={Style.buttonText}>Vamos lá</Text>
      </TouchableOpacity>
        </View>
    )
}

const Style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        backgroundColor: '#565656',
        paddingVertical: 10,
        paddingHorizontal: 158,
        borderRadius: 5,
        marginTop: 590,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
      },
})

export default HomePage;