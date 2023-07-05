import { ReactElement } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function CustomDrawerItem(props: {label: string, onPress: () => void}){
    return (
        <TouchableOpacity style={s.itemBox} onPress={() => props.onPress()}>
            <Text style={s.label}>{props.label}</Text>
        </TouchableOpacity>
    )
}

const s = StyleSheet.create({
    label: {
        fontSize: 20, 
        fontWeight: "bold", 
        color: "black"
    },
    itemBox: {
        paddingVertical: 12,
        paddingHorizontal: 17,
    }
})