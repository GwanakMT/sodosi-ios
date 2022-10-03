import React, { useState } from 'react'
import PropTypes from 'prop-types'
import WarningIcon from '../../assets/images/icon/warning.svg'
import { GlobalStyles, Colors } from '../../assets/theme'
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  View,
  StyleSheet
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header, Typography, Input, Button } from '../../components/common'

function Nickname(props) {
  const { navigation } = props

  const [nickname, setNickName] = useState('')
  const [isError, setIsError] = useState(false)

  const handleOnSubmit = () => {
    setIsError(false)
    navigation.navigate('Welcome')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding' })}
        style={styles.avoid}>
        <Header onPress={() => navigation.goBack()} />
        <View style={styles.container}>
          <View>
            <Typography
              variant="title2"
              color={Colors.text_primary}
              customStyles={styles.title}
              bold>
              시민님을 뭐라고 부를까요?
            </Typography>
            <View style={[GlobalStyles.flexRow, styles.inputWrap]}>
              <Input
                value={nickname}
                onChangeText={setNickName}
                placeholder="호랑이는 가죽을 남기고..."
                keyboardType="default"
                customStyles={GlobalStyles.flex1}
                isError={isError}
                textAlign="center"
                autoFocus
              />
            </View>
            {isError && (
              <View style={[GlobalStyles.flexRow, GlobalStyles.centerVertical]}>
                <WarningIcon />
                <Typography
                  variant="caption"
                  color={Colors.system_tint_pink}
                  customStyles={styles.errorText}>
                  이미 있는 별명이에요!
                </Typography>
              </View>
            )}
          </View>
          <Button
            type="primary"
            disabled={nickname.length < 1}
            onPress={handleOnSubmit}>
            입주하기
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.base_white
  },
  avoid: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.base_white,
    paddingTop: 36,
    padding: 20
  },
  title: {
    paddingBottom: 24
  },
  inputWrap: {
    paddingBottom: 10
  },
  errorText: {
    marginLeft: 6
  }
})

Nickname.defaultProps = {}

Nickname.propTypes = {
  navigation: PropTypes.object
}

export default Nickname
