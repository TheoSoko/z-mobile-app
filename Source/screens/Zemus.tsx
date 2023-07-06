import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import SearchMenuList from '../components/searchMenuList'
import Article from '../components/article'
import type  { Article as Article_Type, Articles_Group } from '../types/globalTypes'

export default function Zemus(){
    return (
        <View style={s.main_block}>

            <View style={s.top_menus_block}>
                <SearchMenuList listType="sources" style={{flex: 5}}/>
                <SearchMenuList listType="concept" style={{flex: 9}}/>
                <SearchMenuList listType="country" style={{flex: 6}}/>
            </View>

            <ScrollView style={s.news}>
                <Text style={s.main_text}>Bienvenue dans Zemus, une application de recherche d'actualités</Text>
                {
                    /**<Article article={a}/> */
                    articles_test.map((group, i) => {
                        return (
                            <View style={s.articles_group} key={i}>
                                <Text style={s.articles_group_title}>{articleGroupTitle(group)}</Text>
                                {
                                    group.articles.map((a, i) => <Article article={a} key={i}/>)
                                }
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}


const articles_test: Articles_Group[] = [
    {
        country: "France",
        articles: [
            {
                title: "Paris 2024 finalement annulé",
                link: "https://beliration.fr/articles/6498164",
                image: "https://medias.paris2024.org/uploads/2022/07/MicrosoftTeams-image-1-1-e1658764110145.jpg?x-oss-process=image/resize,w_1920,h_964,m_lfit/format,jpeg",
                country: "fr",
                publication_date: "2023-07-06 00:00:00",
                description: "Pourquoi les Jeux Olympiques d'été de 2024 ont été annulés." 	
            },
            {
                title: "Jacques Cheminade estimé à 96% d'intentions de vote pour 2027",
                link: "https://mary-ann.fr/articles/99420",
                image: "https://mobile.interieur.gouv.fr/var/miomcti/storage/images/www.interieur.gouv.fr/version-fre/actualites/dossiers/dans-les-coulisses-de-l-election-presidentielle/836407-1-fre-FR/Dans-les-coulisses-de-l-election-presidentielle.jpg",
                country: "fr",
                publication_date: "2023-07-02 00:00:00",
                description: "Les estimations d'intentions de vote pour la présidentielle de 2027 vont vous surprendre." 	
            },
            {
                title: "Il y aurait 5 fois plus de rats que d'habitants à Paris selon une étude",
                link: "https://leparigo.fr/articles/2222",
                image: "https://images.radio-canada.ca/w_1600,h_900/v1/ici-tele/16x9/ratatouille-2.jpg",
                country: "fr",
                publication_date: "2023-07-03 00:00:00",
                description: "Tout sur la dernière étude inquiétante concernant la population de rongeur logeant dans la capitale." 	
            }        
        ]
    },
    {
        country: "United-Kingdom",
        theme: "société",
        articles: [
            {
                title: "'Friendly' bear visits same neighbourhood every year to use pool and trampoline",
                link: "https://themoon.uk/8164649",
                image: "https://i2-prod.mirror.co.uk/incoming/article30385306.ece/ALTERNATES/s1200d/1_SWNS_NEIGHBOURHOOD_BEAR_05.jpg",
                country: "uk",
                publication_date: "2023-07-05 00:00:00",
                description: "A 'Friendly' bear visits the same neighbourhood every year to use pool and trampoline." 	
            },
            {
                title: "Man tries to nick ATM by subtly ramming stolen crane into side of Co-op",
                link: "https://metro.co.uk/2023/07/04/man-tries-to-nick-atm-by-ramming-crane-into-side-of-barnham-co-op-19066273/?ico=mosaic_weird",
                image: "https://metro.co.uk/wp-content/uploads/2023/07/SEI_162792683-c20b.jpg?quality=90&strip=all&zoom=1&resize=644%2C351",
                country: "uk",
                publication_date: "2023-07-05 00:00:00",
                description: "Passers-by would be forgiven for thinking nothing untoward was taking place." 	
            },
            {
                title: "Woman bites into KitKat and finds there's no wafer, just solid chocolate",
                link: "https://mailydail.uk/news/37085'",
                image: "https://metro.co.uk/wp-content/uploads/2023/04/SEC_153777779-fa4c.jpg?quality=90&strip=all&zoom=1&resize=644%2C338",
                country: "uk",
                publication_date: "2023-07-03 00:00:00",
                description: "" 	
            },
            {
                title: "Trans charity Mermaids fails to have charitable status stripped from LGB Alliance",
                link: "https://www.theguardian.com/world/2023/jul/06/trans-charity-mermaids-fails-to-have-charitable-status-stripped-from-lgb-alliance",
                image: "https://i.guim.co.uk/img/media/d3d75f3bcbdbe2a256ae4bf583a207c3349cb7ce/157_799_5023_3014/master/5023.jpg?width=620&dpr=2&s=none",
                country: "uk",
                publication_date: "2023-07-06 00:00:00",
                description: "Judges say law does not allow group to challenge charitable status of new organisation with opposing views"
            },
            {
                title: "'Giant' 300,000-year-old handaxes unearthed in Kent",
                link: "https://www.theguardian.com/science/2023/jul/06/giant-handaxes-unearthed-kent",
                image: "https://i.guim.co.uk/img/media/171debb05ef08a5ec774e384e0840237b5c0d650/0_61_2574_1545/master/2574.jpg?width=620&dpr=2&s=none",
                country: "uk",
                publication_date: "2023-07-06 00:00:00",
                description: "Discovery of more than 800 artefacts includes some of largest early prehistoric stone tools in Britain"
            }        
    
        ]
    }


]

const articleGroupTitle = (gr: Articles_Group) => {
    let theme = gr.theme ?? ""
    const country = gr.country ?? ""
    const between = (theme != "" && country != "") ? " - " : " "
    if (theme.length > 1) theme = theme.charAt(0).toUpperCase() + theme.slice(1)
    return theme + between + country 
}

const s = StyleSheet.create({
    main_block: {
        flex: 1,
        alignItems: 'center'
    },
    main_text: {
        color: 'black',
        fontSize: 22,
        fontWeight: '500',
        marginHorizontal: 32,
        zIndex: 0,
    },
    top_menus_block: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginTop: 19, 
        position: "absolute",
        zIndex: 1,
    },
    news: {
        marginTop: 140,
        width: "90%"
    },
    articles_group_title: {
        fontSize: 20,
        fontWeight: "700",
        alignSelf: "center",
        marginVertical: 10,
        color: "#009AAD"
    },
    articles_group: {
        alignItems: "center",
    }
})