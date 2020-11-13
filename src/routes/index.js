import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Detail, Empty, Home, OnBoarding, SignIn, Splash} from '../pages';

const Stack = createStackNavigator();
const StackScreen = [
  {name: 'Home', component: Home},
  {name: 'Empty', component: Empty},
  {name: 'OnBoarding', component: OnBoarding},
  {name: 'SignIn', component: SignIn},
  {name: 'Splash', component: Splash},
  {name: 'Detail', component: Detail},
];

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        {StackScreen.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
