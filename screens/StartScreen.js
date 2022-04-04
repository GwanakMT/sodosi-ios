import React from 'react';
import CafeGif from '../assets/images/cafe.gif';
import {StatusBar, View, Image, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '../components';

function StartScreen({navigation}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={CafeGif} style={styles.gif} />
          <Text style={styles.title}>공부하기 좋은 카페 어디지?</Text>
          <Text style={styles.description}>
            우리는 모두 다양한 취향을 가지고 있습니다.{'\n'}
            소도시에서 내 취향을 담은 장소를 만나보세요
          </Text>
        </View>
        <View style={styles.buttonWrap}>
          <Button
            type="primary"
            title="시작하기"
            customStyles={styles.startButton}
            onPress={() => navigation.navigate('')}
          />
          <Button type="outlined" title="이미 소도시 회원이에요!" />
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
    fontFamily: 'Pretendard-Bold',
    fontSize: 22,
    color: 'white',
    paddingBottom: 14,
    lineHeight: 32,
  },
  description: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 15,
    color: 'white',
    opacity: 0.7,
    lineHeight: 22,
    letterSpacing: -0.24,
    textAlign: 'center',
  },
  startButton: {
    marginBottom: 14,
  },
});

export default StartScreen;
