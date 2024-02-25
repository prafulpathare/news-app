import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

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


export default function Home() {

    const [fontsLoaded, fontError] = useFonts({
        'pt-sans': require('../assets/fonts/pt-sans/PTS55F.ttf'),
        'pt-sans-b': require('../assets/fonts/pt-sans/PTC75F.ttf'),
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
            <ScrollView>
                    <Text style={{...styles.headLabels, marginTop: Dimensions.get('screen').height * 0.04 }}>Breaking News</Text>

                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        renderItem={({ item, index, separators }) => (
                            <View
                                key={item.key}
                                onPress={() => this._onPress(item)}
                                style={{
                                    maxWidth: 350,
                                }}
                            >
                                <View style={{
                                    paddingHorizontal: 10
                                }}>
                                    <Image source={{ uri: item.cover }} style={{
                                        height: 200,
                                        borderRadius: 10
                                    }} />
                                    <View style={{
                                        padding: 10,
                                        paddingHorizontal: 0
                                    }}>
                                        <Text style={styles.caption}>{item.title}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
               
                    <Text style={styles.headLabels}>Recommendation</Text>
                    <FlatList
                        data={data}
                        renderItem={({ item, index, separators }) => (
                            <View
                                key={item.key}
                                onPress={() => this._onPress(item)}
                                style={{
                                    flexDirection: 'row',
                                    padding: 10
                                }}
                            >
                                <View style={{
                                    flex: 10,
                                    margin: 5
                                }}>
                                    <Text style={styles.caption}>{item.title}</Text>
                                </View>
                                <Image source={{ uri: item.cover }} style={{
                                    flex: 4,
                                    borderRadius: 5,
                                }} />
                            </View>
                        )}
                    />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headLabels: {
        padding: 15,
        fontSize: 20,
        fontFamily: 'open-sans-b'
    },
    caption: {
        fontFamily: 'open-sans'
    }
});
