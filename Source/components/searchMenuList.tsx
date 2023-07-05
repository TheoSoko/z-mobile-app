import { View, Text, StyleSheet, TouchableOpacity, Pressable, ViewStyle } from 'react-native'
import { useState } from 'react'


export default function SearchMenuList(props: {listType: "sources" | "concept" | "country", style: ViewStyle }){
    const [selected, setSelected] = useState<string>("")
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    let l = props.listType
    let list: string[] = []

    if (l == "sources") list = sourceTypeList
    if (l == "concept") list = conceptList
    if (l == "country") list = countryList

    return (                
        <View style={[{flexDirection: 'column'}, props.style ]}>
            <TouchableOpacity style={s.top_menus} onPress={() => setMenuOpen(!menuOpen)}>
                <Text style={s.top_menu_text}> { selected || list[0] }</Text>
            </TouchableOpacity>

            {
                (menuOpen) ?
                    <View style={l == "concept" ? s.colMiddle : s.col}>
                    {
                        list.map((name) => {
                            return (
                                <Pressable onPress={() => setSelected(name)}>
                                    <Text style={ l == "concept" ? s.itemTextMiddle : s.itemText }>{name}</Text>
                                </Pressable>
                            )
                        })
                    }
                    </View>
                : null
            }

        </View>
    )
}

const s = StyleSheet.create({
    col: {

    },
    colMiddle: {
        alignItems: 'center',
    },
    itemTextMiddle: {

    },
    itemText: {
        paddingLeft: 20,
        marginVertical: 3,
    },
    top_menus: {
        paddingHorizontal: 12,
        //width: 115,
        paddingVertical: 12.5,
        marginHorizontal: 4,
        backgroundColor: "#009AAD",
        borderRadius: 9,
        alignItems: "center"
    },
    top_menu_last: {
        paddingHorizontal: 25,
    },
    top_menu_text: {
        color: "white",
        fontSize: 16,
        fontWeight: '500',
    },

})

const sourceTypeList = [
    "Journaux",
    "TV",
    "Agences de presses",
    "Pouvoirs Publics",
    "Sécurité Nationale",
    "Ambassades",
    "Partis Politiques",
    "Think Tank",
    "Universités",
    "Grandes entreprises",
]

const conceptList = [
    "De quoi parle-t-on ?",
    "De quels pays parle-t-on ?",
    "Quels pays en parlent ?",
]

const countryList = [
    "Afghanistan",
    "Brésil",
    "France",
    "Italie",
    "Espagne",
    "UK",
    "Allemagne",
    "Russie",
    "Ukraine",
    "Venezuela"
]
