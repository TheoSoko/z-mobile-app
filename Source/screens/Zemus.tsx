import { View, Text, StyleSheet } from 'react-native'

export default function Zemus(){
    return (
        <View style={s.mainBlock}>
            <Text style={s.mainText}>Bienvenue dans Zemus, une application de recherche d'actualités</Text>
        </View>
    )
}

const s = StyleSheet.create({
    mainBlock: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center'
    },
    mainText: {
        color: 'black',
        fontSize: 22,
        fontWeight: '500',
        marginHorizontal: 32,
    }
})