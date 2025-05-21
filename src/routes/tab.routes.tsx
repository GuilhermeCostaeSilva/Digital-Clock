import React from 'react';
import {Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Clock} from '../screens/Clock';
import {Stopwatch} from '../screens/Stopwatch';
import {Counter} from '../screens/Counter';
import {Timer} from '../screens/Timer';

const {Navigator, Screen} = createBottomTabNavigator();

export const TabRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false, tabBarStyle:{
        backgroundColor:'#27272a',
        borderTopWidth:0,
    }, tabBarActiveTintColor:"#7c3aed"}}>
      <Screen
        name="Clock"
        component={Clock}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              style={{width: 30, height: 30}}
              tintColor={color}
              source={require('../assets/images/icons/clock.png')}
            />
          ),
        }}
      />
      <Screen
        name="Counter"
        component={Counter}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              style={{width: 30, height: 30}}
              tintColor={color}
              source={require('../assets/images/icons/counter.png')}
            />
          ),
        }}
      />
      <Screen
        name="Stopwatch"
        component={Stopwatch}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              style={{width: 30, height: 30}}
              tintColor={color}
              source={require('../assets/images/icons/stopwatch.png')}
            />
          ),
        }}
      />
      <Screen
        name="Timer"
        component={Timer}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              style={{width: 30, height: 30}}
              tintColor={color}
              source={require('../assets/images/icons/timer.png')}
            />
          ),
        }}
      />
    </Navigator>
  );
};
