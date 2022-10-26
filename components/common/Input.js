import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Colors, GlobalStyles } from '../../assets/theme'
import { TextInput, StyleSheet } from 'react-native'

const Input = forwardRef((props, ref) => {
  const {
    value,
    defaultValue,
    onChangeText,
    placeholder,
    secureTextEntry,
    keyboardType,
    editable,
    customStyles,
    isError,
    autoFocus,
    returnKeyType,
    textAlign,
    maxLength,
    onPress,
    ...rest
  } = props

  return (
    <TextInput
      ref={ref}
      value={value}
      defaultValue={defaultValue}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={Colors.text_tertiary}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      selectionColor={Colors.system_tint_blue}
      style={[
        styles.input,
        isError && styles.error,
        customStyles,
        !(value?.length > 0 || defaultValue?.length > 0) && GlobalStyles.normal
      ]}
      onSubmitEditing={onPress}
      returnKeyType={returnKeyType}
      textAlign={textAlign}
      maxLength={maxLength}
      editable={editable}
      autoFocus={autoFocus}
      {...rest}
    />
  )
})

const styles = StyleSheet.create({
  input: {
    height: 52,
    fontSize: 18,
    color: Colors.text_primary,
    letterSpacing: -0.408,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    fontFamily: 'Pretendard-Bold'
  },
  error: {
    borderWidth: 1,
    borderColor: Colors.system_tint_pink,
    backgroundColor: '#FFF5F7'
  }
})

Input.defaultProps = {
  isError: false,
  secureTextEntry: false,
  returnKeyType: 'done'
}

Input.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  editable: PropTypes.bool,
  customStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  isError: PropTypes.bool,
  autoFocus: PropTypes.bool,
  returnKeyType: PropTypes.string,
  textAlign: PropTypes.string,
  maxLength: PropTypes.number,
  onPress: PropTypes.func
}

export default Input
