import { View, Text, StyleSheet } from 'react-native'

export default function Followed(){
    return (
        <View style={s.mainBlock}>
            <Text style={s.mainText}>Pays et thématiques suivis</Text>
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