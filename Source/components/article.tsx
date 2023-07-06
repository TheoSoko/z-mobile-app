import { View, Text, StyleSheet, Image, ImageURISource  } from 'react-native'
import type { Article as Article_Type} from '../types/globalTypes'

export default function Article(props: {article: Article_Type}) {
    let a = props.article
   return (
        <View style={s.item}>
            <Image source={{uri:a.image as string, width:180,height:180 }} style={s.image}/>
            <View style={s.article_info}>
                <Text>{a.title}</Text>
                <Text>{a.description}</Text>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    item: {
        backgroundColor: "#e8e8e8",
        flexDirection: "row",
        borderRadius: 9,
        marginVertical: 10,
    },
    image: {
        borderRadius: 8,
    },
    article_info: {
        flexDirection: "column",
        marginLeft: 12,
    },
})