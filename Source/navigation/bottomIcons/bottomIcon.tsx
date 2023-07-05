import { TouchableOpacity, Image, ImageSourcePropType, View, StyleSheet } from "react-native";
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { screenList } from "../bottomTabNav"
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BottomIcon(props: BottomTabBarButtonProps ){

    if (props.to == "/BottomTab/Premium" || props.to == "/BottomTab/Favorites" || props.to =="/BottomTab/Followed") {
        return <View style={{ width: 0 }} />
    }

    return (
        <TouchableOpacity style={s.Button} onPress={(e) => (props.onPress) && props.onPress(e)}>
        {
            (props.to == "/BottomTab/Profile") 
            ? <Ionicons name="person" size={41} color={"#009AAD"}/>
            : <Image source={getImageFromRoute(props.to)} />
        }
        </TouchableOpacity>
    )
}

const getImageFromRoute = (routeName?: string): ImageSourcePropType => {
    let machin: ImageSourcePropType

    switch (routeName) {
        case undefined:
            machin = require('../../../static/logos/logo_z_small.png')
            console.warn("props.to in BottomIcon was not defined")
        break;
        case "/BottomTab/Friends":
            machin = require('../../../static/tab_menu/friends_small.png')
        break;
        case "/BottomTab/Feed":
            machin = require('../../../static/tab_menu/home_small.png')
        break;
        case "/BottomTab/Zemus":
            machin = require('../../../static/logos/logo_z_small.png')
        break;
        case "/BottomTab/Messages":
            machin = require('../../../static/tab_menu/message_small.png')
        break;
        case "/BottomTab/Profile":
            machin = require('../../../static/tab_menu/friends-press-review.png')
        break;
        default:
            machin = require('../../../static/logos/logo_z_small.png')
            console.warn("props.to in BottomIcon (", routeName ,") does not match one of expected strings")
        break;
    }

    return machin
}



const s = StyleSheet.create({
    Button: {
        paddingHorizontal: 10,
        height: 50,
        //backgroundColor: 'red',
        justifyContent: 'center'
    }
})