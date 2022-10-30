import React, { useEffect, useState, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'
import { GlobalStyles, Colors } from '../../assets/theme'
import { range } from 'lodash-es'
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  View,
  Pressable,
  StyleSheet
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Typography, Input, Button, Icons } from '../../components/common'

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }

    let id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}

function CertificationNumber(props) {
  const { navigation } = props

  const inputRef = React.useRef()

  const [certificationNumber, setCertificationNumber] = useState('')
  const [isError, setIsError] = useState(false)
  const [time, setTime] = useState(60 * 3)
  const [delay, setDelay] = useState(null)

  useInterval(() => {
    if (time === 0) {
      setDelay(null)
    } else {
      setTime(time - 1)
    }
  }, delay)

  useEffect(() => {
    setDelay(1000)
    return () => {
      setDelay(null)
    }
  }, [])

  const timeText = useMemo(() => {
    const date = new Date(null)
    date.setSeconds(time)
    return date.toISOString().substr(14, 5)
  }, [time])

  const handleOnSubmit = () => {
    if (certificationNumber === '123456') {
      setIsError(false)
      navigation.navigate('Password')
    } else {
      setIsError(true)
    }
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding' })}
        style={styles.avoid}>
        <View style={styles.container}>
          <View>
            <Typography
              variant="title2"
              color={Colors.text_primary}
              customStyles={styles.title}
              bold>
              인증번호를 입력하세요
            </Typography>
            <View style={[GlobalStyles.flexRow, styles.inputWrap]}>
              {range(0, 6, 1).map((i) => (
                <Input
                  key={i}
                  value={certificationNumber[i]}
                  keyboardType="number-pad"
                  customStyles={[GlobalStyles.flex1, styles.input]}
                  isError={isError}
                  textAlign="center"
                  maxLength={1}
                  onPressOut={() => {
                    inputRef.current.focus()
                  }}
                  editable={false}
                />
              ))}
            </View>
            {isError && (
              <View style={[GlobalStyles.flexRow, GlobalStyles.centerVertical]}>
                <Icons id="warning" width={16} height={16} />
                <Typography
                  variant="caption"
                  color={Colors.system_tint_pink}
                  customStyles={styles.errorText}>
                  {time === 0
                    ? '인증번호 입력시간을 초과하였습니다.'
                    : isError && '인증번호가 일치하지 않습니다.'}
                </Typography>
              </View>
            )}
            <View style={GlobalStyles.none}>
              <Input
                ref={inputRef}
                value={certificationNumber}
                onChangeText={setCertificationNumber}
                keyboardType="number-pad"
                isError={isError}
                maxLength={6}
                autoFocus
                returnKeyType="next"
              />
            </View>
          </View>
          <View>
            <View
              style={[
                GlobalStyles.flexRow,
                GlobalStyles.centerJustify,
                styles.description
              ]}>
              <Typography
                variant="subheadline"
                align="center"
                color={Colors.text_secondary}
                customStyles={styles.timer}
                semiBold>
                {timeText}
              </Typography>
              <Pressable
                onPress={() => {
                  setDelay(1000)
                  setTime(60 * 3)
                  setIsError(false)
                }}>
                <Typography
                  variant="subheadline"
                  align="center"
                  color={Colors.text_secondary}
                  customStyles={styles.resend}
                  semiBold>
                  재전송
                </Typography>
              </Pressable>
            </View>
            <Button
              type="primary"
              disabled={certificationNumber.length !== 6}
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
    paddingBottom: 16
  },
  input: {
    height: 60,
    fontSize: 34,
    lineHeight: 42,
    letterSpacing: 0.374,
    fontFamily: 'Pretendard',
    paddingHorizontal: 0,
    marginRight: 8
  },
  errorText: {
    marginLeft: 4
  },
  description: {
    paddingBottom: 20
  },
  timer: {
    marginRight: 8
  },
  resend: {
    textDecorationLine: 'underline'
  }
})

CertificationNumber.defaultProps = {}

CertificationNumber.propTypes = {
  navigation: PropTypes.object
}

export default CertificationNumber
