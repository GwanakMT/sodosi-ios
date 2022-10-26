import React from 'react'
import PropTypes from 'prop-types'
import CafeGif from '../../assets/images/cafe.gif'
import { GlobalStyles, Colors } from '../../assets/theme'
import { StatusBar, View, Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Typography, Button } from '../../components/common'

function Start(props) {
  const { navigation } = props

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={[GlobalStyles.flex1, GlobalStyles.center]}>
          <Image source={CafeGif} style={styles.gif} />
          <Typography
            variant="title2"
            color="white"
            bold
            customStyles={styles.title}>
            공부하기 좋은 카페 어디지?
          </Typography>
          <Typography
            variant="subheadline"
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
            height={52}
            customStyles={styles.startButton}
            onPress={() => navigation.navigate('Phone')}>
            <Typography
              color={Colors.base_white}
              customStyles={{
                fontSize: 16,
                lineHeight: 24
              }}
              bold>
              시작하기
            </Typography>
          </Button>
          <Button height={50} customStyles={styles.outlinedButton}>
            <Typography variant="callout" color={Colors.base_white}>
              이미 소도시 회원이에요!
            </Typography>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1C1C1E'
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    padding: 20
  },
  buttonWrap: {
    width: '100%'
  },
  gif: {
    width: 260,
    height: 260,
    marginBottom: 32
  },
  title: {
    paddingBottom: 14
  },
  description: {
    opacity: 0.7,
    lineHeight: 22
  },
  startButton: {
    marginBottom: 14
  },
  outlinedButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFFFFF99',
    lineHeight: 22,
    letterSpacing: -0.32
  }
})

Start.defaultProps = {}

Start.propTypes = {
  navigation: PropTypes.object
}

export default Start
