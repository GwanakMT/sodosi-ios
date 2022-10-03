import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyles, Colors } from '../../assets/theme'
import { StatusBar, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Typography, Input, Icons } from '../../components/common'

function ChangePassword(props) {
  const { values, setValues, isError } = props

  const handleOnChange = (key, value) => {
    setValues({ ...values, [key]: value })
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Typography
          variant="subheadline"
          color={Colors.text_secondary}
          customStyles={styles.label}
          bold>
          현재 비밀번호
        </Typography>
        <View
          style={[styles.inputWrap, isError.password && styles.errorInputWrap]}>
          <Input
            value={values.password}
            onChangeText={(text) => handleOnChange('password', text)}
            placeholder={'현재 비밀번호'}
            secureTextEntry
            isError={isError.password}
            autoFocus
          />
          {isError.password && (
            <View
              style={[
                GlobalStyles.flexRow,
                GlobalStyles.centerVertical,
                styles.errorWrap
              ]}>
              <Icons
                id="warning"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                customStyles={styles.errorIcon}
              />
              <Typography
                variant="caption"
                color={Colors.system_tint_pink}
                customStyles={styles.errorText}>
                비밀번호가 일치하지 않아요.
              </Typography>
            </View>
          )}
        </View>

        <Typography
          variant="subheadline"
          color={Colors.text_secondary}
          customStyles={styles.label}
          bold>
          새 비밀번호
        </Typography>
        <View
          style={[
            styles.inputWrap,
            isError.newPassword && styles.errorInputWrap
          ]}>
          <Input
            value={values.newPassword}
            onChangeText={(text) => handleOnChange('newPassword', text)}
            placeholder={'새 비밀번호'}
            secureTextEntry
            isError={isError.newPassword}
          />
          {isError.newPassword && (
            <View
              style={[
                GlobalStyles.flexRow,
                GlobalStyles.centerVertical,
                styles.errorWrap
              ]}>
              <Icons
                id="warning"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                customStyles={styles.errorIcon}
              />

              <Typography
                variant="caption"
                color={
                  isError.newPassword
                    ? Colors.system_tint_pink
                    : Colors.text_tertiary
                }
                customStyles={styles.errorText}>
                비밀번호는 8자 이상이어야 해요
              </Typography>
            </View>
          )}
        </View>

        <Typography
          variant="subheadline"
          color={Colors.text_secondary}
          customStyles={styles.label}
          bold>
          새 비밀번호 다시 입력
        </Typography>
        <View
          style={[
            styles.inputWrap,
            isError.reNewPassword && styles.errorInputWrap
          ]}>
          <Input
            value={values.reNewPassword}
            onChangeText={(text) => handleOnChange('reNewPassword', text)}
            placeholder={'새 비밀번호 다시 입력'}
            secureTextEntry
            isError={isError.reNewPassword}
          />
          {isError.reNewPassword && (
            <View
              style={[
                GlobalStyles.flexRow,
                GlobalStyles.centerVertical,
                styles.errorWrap
              ]}>
              <Icons
                id="warning"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                customStyles={styles.errorIcon}
              />
              <Typography
                variant="caption"
                color={Colors.system_tint_pink}
                customStyles={styles.errorText}>
                비밀번호가 일치하지 않아요.
              </Typography>
            </View>
          )}
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
    position: 'relative',
    marginBottom: 40
  },
  errorInputWrap: {
    marginBottom: 60
  },
  label: {
    marginBottom: 12
  },
  errorWrap: {
    position: 'absolute',
    bottom: -28,
    marginTop: 10
  },
  errorIcon: {
    marginRight: 4
  }
})

ChangePassword.defaultProps = {}

ChangePassword.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
  isError: PropTypes.object
}

export default ChangePassword