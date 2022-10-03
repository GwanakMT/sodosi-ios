import React from 'react'
import PropTypes from 'prop-types'
import BackArrow from '../../assets/images/icon/backArrow.svg'
import { GlobalStyles, Colors } from '../../assets/theme'
import { View, Pressable, StyleSheet } from 'react-native'

function Header(props) {
  const { onPress } = props

  return (
    <View style={[styles.header, GlobalStyles.centerJustify]}>
      <Pressable onPress={onPress}>
        <BackArrow />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    paddingHorizontal: 20,
    backgroundColor: Colors.base_white
  }
})

Header.defaultProps = {}

Header.propTypes = {
  onPress: PropTypes.func
}

export default Header
