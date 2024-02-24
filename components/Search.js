import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

const tags = [
    {
        id: 29883,
        label: 'All'
    },
    {
        id: 9238,
        label: 'Politics'
    },
    {
        id: 98342,
        label: 'Sports'
    },
    {
        id: 92382389,
        label: 'Education'
    },
    {
        id: 283093,
        label: 'Games'
    },
    {
        id: 92388923,
        label: 'Bollywood'
    },
]

const data = [
    {
        title: 'Farmers protest LIVE: No post-mortem to dead farmer until FIR, say farm leaders',
        cover: 'https://www.hindustantimes.com/ht-img/img/2024/02/23/550x309/Rahul_Gandhi_PM_Modi_up_youth_nashedi_1708692661149_1708692661483.jpg',
        id: 893489,
        link: 'https://www.hindustantimes.com/india-news/farmers-protest-live-updates-today-february-23-delhi-chalo-march-skm-haryana-punjab-msp-101708653861993.html'
    },
    {
        title: 'US news: Cellphone network restored after a widespread outage',
        cover: 'https://www.livemint.com/lm-img/img/2024/02/23/600x338/Cellular-Outage-5_1708652519575_1708652567873.jpg',
        id: 3483,
        link: 'https://www.livemint.com/news/world/us-news-cellphone-network-restored-after-a-widespread-outage-10-points-11708650554953.html'
    },
    {
        title: 'PM Modi\'s jibe at Rahul Gandhi for \‘nashedi yuva\’ remark: \‘I was shocked',
        cover: 'https://www.hindustantimes.com/ht-img/img/2024/02/23/550x309/PM_Modi_Lucknow_1708339816889_1708672428035.jfif',
        id: 9238923,
        link: 'https://www.hindustantimes.com/india-news/afternoon-briefing-pm-on-kashis-renewed-capability-jaishankar-cautions-against-chinas-mind-game-all-latest-news-101708669687454.html'
    },
    {
        title: 'Farmers protest LIVE: No post-mortem to dead farmer until FIR, say farm leaders',
        cover: 'https://www.hindustantimes.com/ht-img/img/2024/02/23/550x309/Rahul_Gandhi_PM_Modi_up_youth_nashedi_1708692661149_1708692661483.jpg',
        id: 498586,
        link: 'https://www.hindustantimes.com/india-news/farmers-protest-live-updates-today-february-23-delhi-chalo-march-skm-haryana-punjab-msp-101708653861993.html'
    },
    {
        title: 'US news: Cellphone network restored after a widespread outage',
        cover: 'https://www.livemint.com/lm-img/img/2024/02/23/600x338/Cellular-Outage-5_1708652519575_1708652567873.jpg',
        id: 109234,
        link: 'https://www.livemint.com/news/world/us-news-cellphone-network-restored-after-a-widespread-outage-10-points-11708650554953.html'
    },
    {
        title: 'PM Modi\'s jibe at Rahul Gandhi for \‘nashedi yuva\’ remark: \‘I was shocked',
        cover: 'https://www.hindustantimes.com/ht-img/img/2024/02/23/550x309/PM_Modi_Lucknow_1708339816889_1708672428035.jfif',
        id: 52732,
        link: 'https://www.hindustantimes.com/india-news/afternoon-briefing-pm-on-kashis-renewed-capability-jaishankar-cautions-against-chinas-mind-game-all-latest-news-101708669687454.html'
    },
    {
        title: 'Farmers protest LIVE: No post-mortem to dead farmer until FIR, say farm leaders',
        cover: 'https://www.hindustantimes.com/ht-img/img/2024/02/23/550x309/Rahul_Gandhi_PM_Modi_up_youth_nashedi_1708692661149_1708692661483.jpg',
        id: 90434,
        link: 'https://www.hindustantimes.com/india-news/farmers-protest-live-updates-today-february-23-delhi-chalo-march-skm-haryana-punjab-msp-101708653861993.html'
    },
    {
        title: 'US news: Cellphone network restored after a widespread outage',
        cover: 'https://www.livemint.com/lm-img/img/2024/02/23/600x338/Cellular-Outage-5_1708652519575_1708652567873.jpg',
        id: 38349,
        link: 'https://www.livemint.com/news/world/us-news-cellphone-network-restored-after-a-widespread-outage-10-points-11708650554953.html'
    },
    {
        title: 'PM Modi\'s jibe at Rahul Gandhi for \‘nashedi yuva\’ remark: \‘I was shocked',
        cover: 'https://www.hindustantimes.com/ht-img/img/2024/02/23/550x309/PM_Modi_Lucknow_1708339816889_1708672428035.jfif',
        id: 92848394,
        link: 'https://www.hindustantimes.com/india-news/afternoon-briefing-pm-on-kashis-renewed-capability-jaishankar-cautions-against-chinas-mind-game-all-latest-news-101708669687454.html'
    },
];


export default function search() {

    const [fontsLoaded, fontError] = useFonts({
        'pt-sans': require('../assets/fonts/pt-sans/PTS55F.ttf'),
        'open-sans-b': require('../assets/fonts/open-sans/bold.ttf'),
        'open-sans': require('../assets/fonts/open-sans/regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <ScrollView style={{
            }}>

                <View style={styles.headerWrapper}>
                    <Text style={styles.headerWrapper.label}>Discover</Text>
                    <Text style={styles.headerWrapper.subLabel}>News from all around the world</Text>

                    <View style={styles.searchWrapper}>
                        <Image source={require('../assets/search.png')} resizeMode={'contain'} tintColor={'#444'} style={styles.searchWrapper.icon} />
                        <TextInput placeholder={'Search...'} cursorColor={'#000'} style={styles.searchWrapper.placeholder} />
                    </View>
                </View>


                <View style={{}}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={tags}
                        renderItem={({ item, index, separators }) => (
                            <View
                                key={item.key}
                                onPress={() => this._onPress(item)}
                                style={styles.tagsWrapper}
                            >
                                <Text style={styles.tagsWrapper.label}>{item.label}</Text>
                            </View>
                        )}
                    />

                    <FlatList
                        style={styles.resultsWrapper}
                        data={data}
                        renderItem={({ item, index, separators }) => (
                            <View
                                key={item.key}
                                onPress={() => this._onPress(item)}
                                style={styles.resultsWrapper.itemWrapper}
                            >
                                <Image source={{ uri: item.cover }} style={styles.resultsWrapper.itemWrapper.cover} />
                                <View style={styles.resultsWrapper.itemWrapper.contextWrapper}>
                                    <Text style={styles.caption}>{item.title}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    headLabels: {
        padding: 15,
        fontSize: 25,
        fontFamily: 'pt-sans'
    },
    caption: {

    },
    headerWrapper: {
        marginTop: Dimensions.get('screen').height * 0.04, padding: 15, paddingVertical: 20,

        label: { fontSize: 35, fontFamily: 'open-sans-b' },
        subLabel: { marginLeft: 3, fontFamily: 'open-sans' }
    },

    searchWrapper: {
        backgroundColor: '#f3f3f3',
        borderRadius: 20,
        flexDirection: 'row',
        alignContent: 'center',
        paddingVertical: 10,
        marginTop: 15,

        icon: {
            height: 25,
        },

        placeholder: {
            fontWeight: 'bold',
        }

    },

    tagsWrapper: {
        flexDirection: 'column',
        backgroundColor: '#039dfc',
        borderRadius: 20,
        padding: 7,
        marginLeft: 15,
        paddingHorizontal: 20,

        label: { color: '#fff' }
    },

    resultsWrapper: {
        marginTop: 20,
        marginHorizontal: 15,

        itemWrapper: {
            flexDirection: 'row',
            marginBottom: 10,

            cover: {
                flex: 4,
                minHeight: 70,
                borderRadius: 10,
            },

            
            contextWrapper: {
                marginLeft: 10,
                flex: 10,
            }
        },
    }
});
