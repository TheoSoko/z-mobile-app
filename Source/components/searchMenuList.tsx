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
        <View style={[s.container, props.style]}>

            <TouchableOpacity style={s.top_menus} onPress={() => setMenuOpen(!menuOpen)}>
                <Text style={s.top_menu_text}> { selected || list[0] }</Text>
            </TouchableOpacity>

            {
                (menuOpen) ?
                    <View style={l == "concept" ? s.colMiddle : s.col}>
                    {
                        list.map((name, i) => {
                            return (
                                <TouchableOpacity onPress={() => setSelected(name)} key={i}>
                                    <Text style={ l == "concept" ? s.itemTextMiddle : s.itemText }>{name}</Text>
                                </TouchableOpacity>
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
    container: {
        zIndex: 1,
        flexDirection: 'column',
    },
    col: {
        backgroundColor: "white",
        borderRadius: 7,
    },
    colMiddle: {
        alignItems: 'center',
        backgroundColor: "white",
        borderRadius: 7,
    },
    itemText: {
        paddingLeft: 15,
        marginVertical: 3,
        color: "black",
        fontWeight: "500",
        fontSize: 14,
    },
    itemTextMiddle: {
        marginVertical: 2,
        color: "black",
        fontWeight: "500",
        fontSize: 15,
    },
    top_menus: {
        //paddingHorizontal: 10,
        paddingVertical: 12.5,
        marginHorizontal: 3.5,
        backgroundColor: "#009AAD",
        borderRadius: 9,
        alignItems: "center"
    },
    top_menu_last: {
        paddingHorizontal: 25,
    },
    top_menu_text: {
        color: "white",
        fontSize: 15.5,
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
