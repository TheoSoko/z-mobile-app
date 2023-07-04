import { View, Text, StyleSheet } from 'react-native'

export default function Feed(){
    return (
        <View style={s.mainBlock}>
            <Text style={s.mainText}>Ceci est la page du feed, vous retrouverez les revues de presse de vos amis.</Text>
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