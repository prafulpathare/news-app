import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Times-New-Roman': require('./assets/fonts/times/times new roman.ttf'),
    'pt-sans': require('./assets/fonts/pt-sans/PTS55F.ttf'),
    'open-sans-b': require('./assets/fonts/open-sans/bold.ttf'),
    'open-sans': require('./assets/fonts/open-sans/regular.ttf'),
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
      <StatusBar style="light" />
      <Home />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Times-New-Roman',
    backgroundColor: '#fff',
  },
});
