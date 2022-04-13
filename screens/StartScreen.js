import React from 'react';
import CafeGif from '../assets/images/cafe.gif';
import {StatusBar, View, Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Typography, Button} from '../components';

function StartScreen({navigation}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={CafeGif} style={styles.gif} />
          <Typography
            variant="title2"
            color="white"
            bold
            customStyles={styles.title}>
            공부하기 좋은 카페 어디지?
          </Typography>
          <Typography
            align="center"
            color="white"
            customStyles={styles.description}>
            우리는 모두 다양한 취향을 가지고 있습니다.{'\n'}
            소도시에서 내 취향을 담은 장소를 만나보세요
          </Typography>
        </View>
        <View style={styles.buttonWrap}>
          <Button
            type="primary"
            customStyles={styles.startButton}
            onPress={() => navigation.navigate('Phone')}>
            시작하기
          </Button>
          <Button type="outlined">이미 소도시 회원이에요!</Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrap: {
    width: '100%',
  },
  gif: {
    width: 260,
    height: 260,
    marginBottom: 32,
  },
  title: {
    paddingBottom: 14,
  },
  description: {
    fontSize: 15,
    opacity: 0.7,
    lineHeight: 22,
    letterSpacing: -0.24,
  },
  startButton: {
    marginBottom: 14,
  },
});

export default StartScreen;
