import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import SearchMenuList from '../components/searchMenuList'

export default function Zemus(){
    return (
        <View style={s.mainBlock}>

            <View style={s.top_menus_block}>
                <SearchMenuList listType="sources" style={{flex: 5}}/>
                <SearchMenuList listType="concept" style={{flex: 9}}/>
                <SearchMenuList listType="country" style={{flex: 6}}/>
            </View>


            <Text style={s.mainText}>Bienvenue dans Zemus, une application de recherche d'actualités</Text>
        </View>
    )
}


const s = StyleSheet.create({
    mainBlock: {
        flex: 1,
        alignItems: 'center'
    },
    mainText: {
        color: 'black',
        fontSize: 22,
        fontWeight: '500',
        marginHorizontal: 32,
        marginTop: 160,
    },
    top_menus_block: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginTop: 19, 
    },

})