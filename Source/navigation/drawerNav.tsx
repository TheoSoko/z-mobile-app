import { createDrawerNavigator, DrawerContentComponentProps, DrawerItem, DrawerHeaderProps } from '@react-navigation/drawer';
import BottomTabNav from './bottomTabNav';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import type { ReactNode } from 'react'
//import CustomDrawerItem from './drawerItem'

const Drawer = createDrawerNavigator()


export default function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName='BottomTab' screenOptions={drawerOptions} drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="BottomTab" component={BottomTabNav}/>
    </Drawer.Navigator>
  )
}

const drawerOptions = {
    drawerType: "front" as any, // dumb typescript string literal going on here
    header: (props: DrawerHeaderProps) => <CustomHeader {...props}/>,
    headerStyle: {
      backgroundColor: 'transparent',
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTitle: '',
    lazy: false,
    drawerHideStatusBarOnOpen: false,
    drawerStatusBarAnimation: "slide" as any, // IOS only
    swipeEdgeWidth: 70,
}

const CustomHeader = (props: DrawerHeaderProps) => {
    return (
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <View style={{ padding: 16 }}>
          <Entypo name="menu" size={43} color="#008EB5" />
        </View>
      </TouchableOpacity>
    )
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <View style={{marginVertical: 22}} {...props}> 
            <DrawerItem
              label="Passer à premium"
              labelStyle={s.label}
              style={s.itemBox}
              onPress={() => props.navigation.navigate("Premium")}
            />
            <DrawerItem
              label="Articles Favoris"
              labelStyle={s.label}
              style={s.itemBox}
              onPress={() => props.navigation.navigate("Favorites")}
            />
            <DrawerItem
              label="Suivis"
              labelStyle={s.label}
              style={s.itemBox}
              onPress={() => props.navigation.navigate("Followed")}
            />
    </View>
  )
}


const s = StyleSheet.create({
  label: {
      fontSize: 20, 
      fontWeight: "bold", 
      color: "black"
  },
  itemBox: {
      marginHorizontal: 22,
  }
})