import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GlobalStyles, Colors } from '../../assets/theme'
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  View,
  StyleSheet
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFocusEffect } from '@react-navigation/native'
import { useHeaderHeight } from '@react-navigation/elements'
import { Typography, Input, Button, Icons } from '../../components/common'

function Phone(props) {
  const { navigation } = props

  const [phone, setPhone] = useState('')
  const [isError, setIsError] = useState(false)

  const handleOnSubmit = () => {
    if (phone.replace(/[^0-9]/g).length === 11) {
      console.log('전화번호 유효성 검사 완료')
      setIsError(false)
      navigation.navigate('CertificationNumber')
    } else {
      setIsError(true)
    }
  }

  const inputRef = React.useRef()

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('transitionEnd', () => {
        inputRef.current?.focus()
      })
      return unsubscribe
    }, [])
  )

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding' })}
        keyboardVerticalOffset={useHeaderHeight()}
        style={styles.avoid}>
        <View style={styles.container}>
          <View>
            <Typography
              variant="title2"
              color={Colors.text_primary}
              customStyles={styles.title}
              bold>
              휴대폰 번호를 입력해주세요
            </Typography>
            <View
              style={[
                GlobalStyles.flexRow,
                GlobalStyles.centerVertical,
                styles.inputWrap
              ]}>
              <Input
                defaultValue="+82"
                editable={false}
                customStyles={styles.countryCode}
                isError={isError}
              />
              <Input
                ref={inputRef}
                value={phone}
                onChangeText={setPhone}
                placeholder="01012345678"
                keyboardType="number-pad"
                customStyles={GlobalStyles.flex1}
                isError={isError}
                returnKeyType="next"
              />
            </View>
            {isError && (
              <View style={[GlobalStyles.flexRow, GlobalStyles.centerVertical]}>
                <Icons id="warning" width={16} height={16} />
                <Typography
                  variant="caption"
                  color={Colors.system_tint_pink}
                  customStyles={styles.errorText}>
                  올바른 휴대폰번호 양식이 아니에요!
                </Typography>
              </View>
            )}
          </View>
          <View>
            <Typography
              variant="caption"
              align="center"
              color={Colors.text_secondary}
              customStyles={styles.description}>
              안전한 소도시 커뮤니티를 위해 휴대폰 번호로 가입해요
            </Typography>
            <Button
              type="primary"
              disabled={phone.length < 11}
              onPress={handleOnSubmit}>
              <Typography variant="callout" color={Colors.base_white} bold>
                다음
              </Typography>
            </Button>
          </View>
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
  countryCode: {
    width: 68,
    height: 54,
    marginRight: 8
  },
  errorText: {
    marginLeft: 4
  },
  description: {
    paddingBottom: 18
  }
})

Phone.defaultProps = {}

Phone.propTypes = {
  navigation: PropTypes.object
}

export default Phone
