import React from 'react';
import PropTypes from 'prop-types';
import {Pressable, Text, StyleSheet} from 'react-native';

function Button(props) {
  const {type, children, customStyles, disabled, onPress} = props;

  return (
    <Pressable
      style={[
        styles.button,
        type === 'primary' && styles.primary,
        type === 'outlined' && styles.outlined,
        type === 'primary' && disabled && styles.disabled,
        customStyles,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={[styles.text, type === 'primary' && styles.bold]}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    borderRadius: 8,
  },
  primary: {
    backgroundColor: '#01DE00',
    lineHeight: 24,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFFFFF99',
    lineHeight: 22,
    letterSpacing: -0.32,
  },
  disabled: {
    backgroundColor: 'rgba(1, 222, 0, 0.3)',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  bold: {
    fontFamily: 'Pretendard-Bold',
  },
});

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any,
  customStyles: PropTypes.object,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
