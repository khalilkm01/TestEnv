import {
  SafeAreaView,
  StyleSheet,
  View
} from "react-native";

import FoodCard from "./Components/FoodCard";
import LandingScreen from './Screens/LandingScreen'
import MenuScreen from './Screens/MenuScreen'
import { NavigationContainer } from '@react-navigation/native';
import OrderScreen from './Screens/OrderScreen'
import React from "react";
import TestScreen from './Screens/TestScreen'
import { createStackNavigator } from '@react-navigation/stack';
import foods from "./items";

const Stack = createStackNavigator();

const App = () => {
 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" headerMode='screen'>
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />
        <Stack.Screen name="Menu" component={MenuScreen}/>
        <Stack.Screen name="Test" component={TestScreen}/>
        <Stack.Screen name="Order" component={OrderScreen}/>
        
        {/* <FoodCard/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles= StyleSheet.create({
  root: {
    backgroundColor: 'white',
    height: "100%",
    width: "100%"
  }
})
