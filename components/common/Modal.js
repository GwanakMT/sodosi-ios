import React from 'react'
import PropTypes from 'prop-types'
import RnModal from 'react-native-modal'
import { Colors, GlobalStyles } from '../../assets/theme'
import { View, StyleSheet } from 'react-native'

function Modal(props) {
  const {
    isVisible,
    animationIn,
    animationOut,
    children,
    customStyles,
    ...rest
  } = props

  return (
    <RnModal
      isVisible={isVisible}
      animationIn={animationIn}
      animationOut={animationOut}
      {...rest}>
      <View style={[GlobalStyles.centerVertical, customStyles]}>
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </RnModal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    width: 312,
    backgroundColor: Colors.base_white,
    borderRadius: 8
  }
})

Modal.defaultProps = {
  animationIn: 'fadeIn',
  animationOut: 'fadeOut'
}

Modal.propTypes = {
  isVisible: PropTypes.bool,
  animationIn: PropTypes.string,
  animationOut: PropTypes.string,
  children: PropTypes.any,
  customStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default Modal
