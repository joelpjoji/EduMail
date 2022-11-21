import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/HomeScreen';
import ViewMail from './Screens/ViewMailScreen';
import NewMail from './Screens/NewMailScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ViewMail" component={ViewMail} />
        <Stack.Screen name="NewMail" component={NewMail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
