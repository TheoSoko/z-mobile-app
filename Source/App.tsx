import 'react-native-gesture-handler' 
import 'react-native-reanimated' 

import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, ImageBackground } from 'react-native';
//import StatusBarCustom from './components/StatusBarCustom'
import { NavigationContainer } from '@react-navigation/native';
import SearchBar from './components/SearchBar'
import DrawerNav from './navigation/drawerNav';

export default function App(): JSX.Element {

  return (
      <NavigationContainer>
        <DrawerNav/>
      </NavigationContainer>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

