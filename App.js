import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import search from './components/Search';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const colors = {
  primary: '#000'
}

function MyTabs() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
          borderTopColor: '#ffffff',
          marginHorizontal: 0,
        }
      }}
    >
      <Tab.Screen
        options={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={require("./assets/home.png")}
                  resizeMode="contain"
                  style={{ ...styles.bottomNav.icon, tintColor: focused ? colors.primary : '#999' }}
                />
              </View>
            );
          },
        }}
        name="Home" component={Home} />
      <Tab.Screen
        options={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={require("./assets/search.png")}
                  resizeMode="contain"
                  style={{ ...styles.bottomNav.icon, width: 30, tintColor: focused ? colors.primary : '#999' }}
                />
              </View>
            );
          },
        }}
        name="Search" component={search} />
        <Tab.Screen
          options={{
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Image
                    source={require("./assets/user.png")}
                    resizeMode="contain"
                    style={{ ...styles.bottomNav.icon, tintColor: focused ? colors.primary : '#999' }}
                  />
                </View>
              );
            },
          }}
          name="Watch" component={Home} />
          <Tab.Screen
            options={{
              tabBarHideOnKeyboard: true,
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Image
                      source={require("./assets/user.png")}
                      resizeMode="contain"
                      style={{ ...styles.bottomNav.icon, tintColor: focused ? colors.primary : '#999' }}
                    />
                  </View>
                );
              },
            }}
            name="User" component={Home} />
    </Tab.Navigator>
  );
}


export default function App() {

  useEffect(() => {

  }, []);

  return (
    <NavigationContainer >
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 0,
    paddingHorizontal: 10,
  },
  text: {
    header: {
      fontWeight: 'bold',
      fontSize: 17,
      lineHeight: 50
    }
  },
  bottomNav: {
    icon: {
      height: 25
    }
  },
  preference: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 20,
    backgroundColor: '#f4f4f4',
    margin: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    fontWeight: 'bold'
  }
});