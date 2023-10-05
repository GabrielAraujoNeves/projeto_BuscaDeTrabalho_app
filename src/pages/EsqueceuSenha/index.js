import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const EsqueceuSenha = () => {
  return (
     <View style={Styles.Container}>
        <Text>
            esqueceu a senha
        </Text>
     </View>
  )
}

const Styles = StyleSheet.create({
 Container:{
    justifyContent: 'center',
    alignItems: 'center',
 }
})

export default EsqueceuSenha