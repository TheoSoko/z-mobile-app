import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import BottomTabNav from './bottomTabNav';
import { View, Text, StyleSheet  } from 'react-native'
import DrawerItem from './drawerItem'

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <View style={{marginVertical: 22}} {...props}> 
            <DrawerItem
              label="Passer à premium"
              onPress={() => props.navigation.navigate("Premium")}
            />
            <DrawerItem
              label="Articles Favoris"
              onPress={() => props.navigation.navigate("Favorites")}
            />
            <DrawerItem
              label="Suivis"
              onPress={() => props.navigation.navigate("Followed")}
            />
    </View>
  )
}

export default function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName='BottomTab' drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="BottomTab" component={BottomTabNav} />
    </Drawer.Navigator>
  )
}