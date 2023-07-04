import { createBottomTabNavigator, BottomTabNavigationOptions, BottomTabScreenProps, BottomTabNavigationProp,} from '@react-navigation/bottom-tabs';
import { View, Image, Text } from 'react-native'
import BottomIcon from './bottomIcons/bottomIcon';
import Friends from '../screens/Friends'
import Feed from '../screens/Feed'
import Messages from '../screens/Messages'
import Profile from '../screens/Profile'
import Zemus from '../screens/Zemus'
/** */
import Favorites from '../screens/Favorites'
import Followed from '../screens/Followed'
import Premium from '../screens/Premium'


const Tab = createBottomTabNavigator<screenList>();


export default function BottomTabNav() {
  return (
        <Tab.Navigator screenOptions={bottomTabOptions} >
            <Tab.Screen name="Friends" component={Friends} options={{tabBarButton: (props) => <BottomIcon {...props} />}} />
            <Tab.Screen name="Feed" component={Feed} options={{tabBarButton: (props) => <BottomIcon {...props} />}} />
            <Tab.Screen name="Zemus" component={Zemus} options={{tabBarButton: (props) => <BottomIcon {...props} />}} />
            <Tab.Screen name="Messages" component={Messages} options={{tabBarButton: (props) => <BottomIcon {...props} />}} />
            <Tab.Screen name="Profile" component={Profile} options={{tabBarButton: (props) => <BottomIcon {...props} />}} />

            {
            /** Tabs invisibles utilisées pour la navigation depuis le drawer */
            }
            <Tab.Screen name="Premium" component={Premium} options={{tabBarButton: (props) => <BottomIcon {...props} />}} />
            <Tab.Screen name="Favorites" component={Favorites} options={{tabBarButton: (props) => <BottomIcon {...props} />}} />
            <Tab.Screen name="Followed" component={Followed} options={{tabBarButton: (props) => <BottomIcon {...props} />}} />

        </Tab.Navigator>
  )
}


const bottomTabOptions  = (props: ScreenOptionsProps): BottomTabNavigationOptions => {
    return {
      headerShown: false,
      tabBarStyle: {
          height: 95,
          alignItems: "center",
          paddingVertical: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
      }
    }

}

export type screenList = {
    "Friends": undefined,
    "Feed": undefined,
    "Zemus": undefined,
    "Messages": undefined,
    "Profile": undefined,
    /** Invisibles */
    "Premium": undefined,
    "Favorites": undefined,
    "Followed": undefined,
}

type ScreenOptionsProps = { 
  route: {name: keyof screenList} 
  navigation: any
}
 

