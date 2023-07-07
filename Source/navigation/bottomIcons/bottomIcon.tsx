import { TouchableOpacity, Image, ImageSourcePropType, View, StyleSheet } from "react-native";
import { ReactElement, FunctionComponent, SVGAttributes } from 'react'
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { screenList } from "../bottomTabNav";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FriendsSvg from "../../../static/tab_menu/friends.svg"
import HomeSvg from "../../../static/tab_menu/home.svg"
import LogoZSvg from "../../../static/tab_menu/logo_z.svg"
import MessageSvg from "../../../static/tab_menu/message.svg"

export default function BottomIcon(props: BottomTabBarButtonProps ){

    if (props.to == "/BottomTab/Premium" || props.to == "/BottomTab/Favorites" || props.to =="/BottomTab/Followed") {
        return <View style={{ width: 0 }} />
    }

    return (
        <TouchableOpacity style={s.Button} onPress={(e) => (props.onPress) && props.onPress(e)}>
        {
            (props.to == "/BottomTab/Profile") 
            ? <Ionicons name="person" size={41} color={"#009AAD"}/>
            : getSVGFromRoute(props.to)
        }
        </TouchableOpacity>
    )
}

const getSVGFromRoute = (routeName?: string): ReactElement => {
    let SVG: FunctionComponent<SVGAttributes<SVGElement>>

    switch (routeName) {
        case undefined:
            SVG = MessageSvg
            console.warn("props.to in BottomIcon was not defined")
        break;
        case "/BottomTab/Friends":
            SVG = FriendsSvg
        break;
        case "/BottomTab/Feed":
            SVG = HomeSvg
        break;
        case "/BottomTab/Zemus":
            SVG = LogoZSvg
        break;
        case "/BottomTab/Messages":
            SVG = MessageSvg
        break;
        case "/BottomTab/Profile":
            SVG = FriendsSvg
        break;
        default:
            SVG = LogoZSvg
            console.warn("props.to in BottomIcon (", routeName ,") does not match one of expected strings")
        break;
    }

    return <SVG height={40} width={40}/>
}



const s = StyleSheet.create({
    Button: {
        paddingHorizontal: 10,
        paddingTop: 3,
        height: 50,
        //backgroundColor: 'red',
        justifyContent: 'center'
    }
})