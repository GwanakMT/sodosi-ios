import React from 'react'
import PropTypes from 'prop-types'
import CheckIcon from '../../assets/images/icon/check.svg'
import { GlobalStyles, Colors } from '../../assets/theme'
import { Pressable, StyleSheet } from 'react-native'

function Checkbox(props) {
  const { active, boxType, onPress, customStyles } = props

  return (
    <Pressable
      boxType={boxType}
      onPress={onPress}
      style={[
        GlobalStyles.center,
        styles.checkbox,
        active && styles.active,
        boxType === 'circle' && styles.circle,
        customStyles
      ]}>
      <CheckIcon color={active ? Colors.base_white : Colors.system_grey_5} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  checkbox: {
    width: 28,
    height: 28,
    borderWidth: 1,
    borderColor: Colors.system_grey_5,
    borderRadius: 8
  },
  active: {
    borderWidth: 0,
    backgroundColor: Colors.green_600
  },
  circle: {
    borderRadius: 30
  }
})

Checkbox.defaultProps = {
  boxType: 'square'
}

Checkbox.propTypes = {
  active: PropTypes.bool,
  boxType: PropTypes.string,
  onPress: PropTypes.func,
  customStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default Checkbox
