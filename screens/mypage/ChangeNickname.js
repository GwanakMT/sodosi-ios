import React, { useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Colors } from '../../assets/theme'
import { StatusBar, View, StyleSheet, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Typography, Input } from '../../components/common'

function ChangeNickname(props) {
  const { navigation } = props

  const [nickname, setNickname] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={handleOnSubmit}>
          <Typography
            variant="callout"
            color={nickname !== '' ? Colors.text_primary : Colors.text_tertiary}>
            완료
          </Typography>
        </Pressable>
      )
    })
  }, [nickname])

  const handleOnSubmit = () => {
    console.log('닉네임 변경 완료')
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.inputWrap}>
          <Typography
            variant="subheadline"
            color={Colors.text_secondary}
            customStyles={styles.label}
            bold>
            닉네임
          </Typography>
          <Input
            value={nickname}
            onChangeText={setNickname}
            keyboardType="default"
            autoFocus
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.base_white
  },
  container: {
    flex: 1,
    backgroundColor: Colors.base_white,
    paddingTop: 32,
    paddingHorizontal: 20
  },
  inputWrap: {
    marginBottom: 40
  },
  label: {
    marginBottom: 12
  }
})

ChangeNickname.defaultProps = {}

ChangeNickname.propTypes = {
  navigation: PropTypes.object
}


export default ChangeNickname
