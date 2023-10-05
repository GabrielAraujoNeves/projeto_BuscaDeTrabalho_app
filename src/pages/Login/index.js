import React from "react";
import {View, Text,TextInput ,TouchableOpacity, StyleSheet, ScrollView,KeyboardAvoidingView} from 'react-native';

const TelaDeLogin = ({navigation}) => {
  
    const voltar = () => {
      navigation.navigate('Home');
    }

    const cadastro = () => {
      navigation.navigate('TelaDeCadastro');
    }

    const EsqueceuSenha = () => {
      navigation.navigate('EsqueceuSenha');
    }
  return(
    <KeyboardAvoidingView style={Styles.container} behavior="postion" enabled> 
    <ScrollView contentContainerStyle={Styles.scrollContainer}>  
      <View style={Styles.containerLogo} >
          <TouchableOpacity style={Styles.voltar} onPress={voltar}>
             <Text style={Styles.voltarTitle}> &lt; voltar</Text>
          </TouchableOpacity>
         <Text>Logo</Text>
      </View>


      <View style={Styles.containerForm}>
        <Text style={Styles.title}>Log in</Text>
        <TextInput
        style={Styles.input}
        placeholder="Email Address"
         />
       <TextInput
        style={Styles.input}
        placeholder="Password"
         />

         <TouchableOpacity style={Styles.EsqueceuSenha} onPress={EsqueceuSenha}>
          <Text>Esqueceu sua senha?</Text>
         </TouchableOpacity>

         <TouchableOpacity style={Styles.button}>
            <Text style={Styles.buttonText}>Continue</Text>
         </TouchableOpacity>

         <Text style={Styles.or}>or</Text>

         <TouchableOpacity style={Styles.buttonGoogle}>
            <Text style={Styles.buttonGoogleText}>Continue Whith Google</Text>
         </TouchableOpacity>
         <View style={Styles.naoTemConta}>
           <Text style={Styles.naoTemContaText}>Você não tem conta?</Text>
           <TouchableOpacity style={Styles.cliqueAquiButton} onPress={cadastro}>
            <Text style={Styles.cliqueAquiButtonText}>Clique aqui</Text>
           </TouchableOpacity>
         </View>
       </View>
       </ScrollView>
    </KeyboardAvoidingView>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLogo: {
   flex : 3,  
   backgroundColor:'#d3d3d3',
   justifyContent: 'center',
   alignItems: 'center' 

  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  containerForm : {
    flex: 3,
    justifyContent: 'center',
    alignItems: "center",
  },
  title:{
    fontSize: 23,
    marginBottom: 20,
    right: 160,
  },
  input: {
    width: 380,
    height: 39,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#565656',
    paddingVertical: 10 , 
    paddingHorizontal: 138 ,
    borderRadius: 5,
    marginBottom: 9,
  },
  buttonGoogle: {
    backgroundColor: '#d3d3d3',
    paddingVertical: 10, 
    paddingHorizontal: 100,
    borderRadius: 5,
  },
  buttonGoogleText: {
   color: 'black',
   fontSize: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,  
  },
  EsqueceuSenha:{
    left: 120,
    marginBottom: 20,
  },
  or:{
    marginBottom: 10,
  },
  voltar: {
    right: 175,
    top: -120
  },
  voltarTitle: {
    fontSize: 18,
  },
  naoTemConta:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  naoTemContaText:{
    marginRight: 5,
    marginBottom:10
  },
  cliqueAquiButton: {},
  cliqueAquiButtonText: {
    color: '#2c2c2c',
    marginBottom: 12,
  },
})  


export default TelaDeLogin;