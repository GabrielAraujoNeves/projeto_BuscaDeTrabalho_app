import React from "react";
import {View, Text, Image, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity, StyleSheet} from "react-native";


const TelaDeCadastro = () => {
    return(
      <KeyboardAvoidingView style={Styles.container} behavior="postion" enabled>
        <ScrollView contentContainerStyle={Styles.scrollContainer}>
        <View style={Styles.containerLogo}>
            <Image  source={require('../../logo/male2_85199.png')}
              style={Styles.logoImage}
              />
        </View>

        <View style={Styles.containerForm}>
             <Text style={Styles.title}>Crie sua conta</Text>
             <TextInput
               style={Styles.input}
               placeholder="E-mail"
             />
             <TextInput
               style={Styles.input}
               placeholder="Nome completo"
             />
             <TextInput
               style={Styles.input}
               placeholder="Senha"
             />

             <TouchableOpacity style={Styles.button}>
                <Text style={Styles.buttonText}>Cadastra</Text>
             </TouchableOpacity>

         <View style={Styles.jaTemConta}>
           <Text style={Styles.jaTemContaText}>Já tem uma conta?,</Text>
           <TouchableOpacity style={Styles.cliqueAquiButton}>
            <Text style={Styles.cliqueAquiButtonText}>Faça login</Text>
           </TouchableOpacity>
         </View>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
}

const Styles = StyleSheet.create({
 container:{
    flex: 1, 
 },
  containerLogo:{
    flex: 3,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  containerForm:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImage: {
    width: 150, 
    height: 150, 
  },
  title:{
    fontSize: 23,
    marginBottom: 20,
    right: 120,
  },
  input:{
    width: 380,
    height: 39,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
   button:{
    backgroundColor: '#565656',
    paddingVertical: 10,
    paddingHorizontal: 138,
    borderRadius: 5,
    marginBottom: 5,
   },
   jaTemConta: {
    flexDirection: 'row',
    alignItems: 'center',
   },
   jaTemContaText:{
    marginRight: 5,
   },
   cliqueAquiButton: {},
   cliqueAquiButtonText: {
     color: '#2c2c2c',
   },
})
export default TelaDeCadastro;