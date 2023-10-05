import React from "react";
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import HomePage from "../pages/Home";
import TelaDeLogin from "../pages/Login";
import TelaDeCadastro from "../pages/Cadastro";
import EsqueceuSenha from "../pages/EsqueceuSenha";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
               <Stack.Screen name="Home" component={HomePage}/>
               <Stack.Screen name="Login" component={TelaDeLogin}/>
               <Stack.Screen name="TelaDeCadastro" component={TelaDeCadastro}/> 
               <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;