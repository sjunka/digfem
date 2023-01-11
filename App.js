import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';

import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen"
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
     screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
  );
};




export default App;