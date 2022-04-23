import React from 'react';
import PropTypes from 'prop-types';
import Colors from '../../assets/theme/colors';
import BackArrow from '../../assets/images/icon/backArrow.svg';
import {View, Pressable, StyleSheet} from 'react-native';

function Header(props) {
  const {onPress} = props;

  return (
    <View style={styles.header}>
      <Pressable onPress={onPress}>
        <BackArrow />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.base_white,
  },
});

Header.defaultProps = {};

Header.propTypes = {
  onPress: PropTypes.func,
};

export default Header;
