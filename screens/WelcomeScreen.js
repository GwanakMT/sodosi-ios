import React from 'react';
import Colors from '../assets/theme/colors';
import {StatusBar, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Marker} from '../components/animations';
import {Typography} from '../components';

function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.markerWrap}>
          <Marker />
        </View>
        <Typography variant="title2" align="center" bold>
          소도시장님의{'\n'}입주를 환영합니다 👋
        </Typography>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.base_white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.base_white,
  },
  markerWrap: {
    width: 42,
    height: 70,
    marginBottom: 24,
  },
});

export default WelcomeScreen;
