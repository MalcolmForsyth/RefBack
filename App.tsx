import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import { RootStackParamList } from './src/constants/types';

const stack = createNativeStackNavigator<RootStackParamList>();

const drawer = createDrawerNavigator();

class App extends React.Component {
  render() {
      return (
        <NavigationContainer>
            {/* <stack.Navigator>
                <stack.Screen
                name='Home'
                component={Home}
                options={{headerShown: false}}
                /> 
                <stack.Screen
                name='Login'
                component={Login}
                options={{headerShown: false}}
                />
            </stack.Navigator> */}
            <drawer.Navigator initialRouteName='Home'>
                <drawer.Screen name='Home' component={Home} />
                <drawer.Screen name='Login' component={Login} />
            </drawer.Navigator>
        </NavigationContainer>
        );
      }
}

export default App;
