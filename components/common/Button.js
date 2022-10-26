import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyles, Colors } from '../../assets/theme'
import { Pressable, StyleSheet } from 'react-native'

function Button(props) {
  const {
    type,
    width,
    height,
    borderRadius,
    children,
    customStyles,
    disabled,
    onPress
  } = props

  return (
    <Pressable
      style={[
        GlobalStyles.center,
        styles.button,
        type === 'primary' && styles.primary,
        type === 'secondary' && styles.secondary,
        type === 'outlined' && styles.outlined,
        type === 'primary' && disabled && styles.disabled,
        { width, height, borderRadius },
        customStyles
      ]}
      disabled={disabled}
      onPress={onPress}>
      {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.system_grey_6
  },
  primary: {
    backgroundColor: Colors.green_600,
    lineHeight: 24
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.green_600
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.system_grey_6,
    lineHeight: 22,
    letterSpacing: -0.32
  },
  small: {
    height: 32,
    borderRadius: 4,
    paddingHorizontal: 12
  },
  large: {
    height: 56,
    borderRadius: 8
  },
  disabled: {
    backgroundColor: 'rgba(1, 222, 0, 0.3)'
  },
  smallText: {
    fontSize: 13,
    lineHeight: 20
  },
  largeText: {
    fontSize: 16,
    lineHeight: 24
  }
})

Button.defaultProps = {
  height: 56,
  borderRadius: 8,
  disabled: false
}

Button.propTypes = {
  type: PropTypes.string,
  width: PropTypes.any,
  height: PropTypes.any,
  borderRadius: PropTypes.number,
  children: PropTypes.any,
  customStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabled: PropTypes.bool,
  onPress: PropTypes.func
}

export default Button
