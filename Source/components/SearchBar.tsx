import { StyleSheet, View, TextInput } from 'react-native'
import { useState } from 'react'
import { percentOfWindow } from '../utils/dimensions';

export default function SearchBar(){
    const [pressed, setPressed] = useState<boolean>(false)
    const [text, setText] = useState<string>("hello")
    return (
        <View style={s.bar}>
            <TextInput style={pressed ? s.search_pressed : s.search_unpressed} 
                       onFocus={() => setPressed(true)}
                       onBlur={() => setPressed(false)}
                       value={text}
                       onChangeText={(t) => setText(t)}
                       keyboardType="default"
                    />
        </View>  
    )
}


const s = StyleSheet.create({
    bar: {
        height: 100,
        backgroundColor: '#cae1e1',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    search_unpressed: {
        padding: 10,
        flexDirection: "row",
        width: percentOfWindow(92),
        backgroundColor: "#f1f2f2",
        borderRadius: 15,
        alignItems: "center",   
      },
    search_pressed: {
        padding: 10,
        flexDirection: "row",
        width: percentOfWindow(80),
        backgroundColor: "#f1f2f2",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
})
