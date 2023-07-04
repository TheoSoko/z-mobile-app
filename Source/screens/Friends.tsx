import { View, Text, StyleSheet } from 'react-native'

export default function Friends(){
    return (
        <View style={s.mainBlock}>
            <Text style={s.mainText}>Ceci est la page des amis</Text>
        </View>
    )
}

const s = StyleSheet.create({
    mainBlock: {
        marginTop: 50,
        alignItems: 'center'
    },
    mainText: {
        fontSize: 25,
        fontWeight: '500',
        marginHorizontal: 30,
    }
})