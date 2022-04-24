import React from 'react';
import PropTypes from 'prop-types';
import Colors from '../../assets/theme/colors';
import {Pressable, Text, StyleSheet} from 'react-native';
import Typography from './Typography';

function Button(props) {
  const {type, size, children, customStyles, disabled, onPress} = props;

  return (
    <Pressable
      style={[
        styles.button,
        type === 'primary' && styles.primary,
        type === 'outlined' && styles.outlined,
        type === 'primary' && disabled && styles.disabled,
        size === 'small' && styles.small,
        size === 'large' && styles.large,
        customStyles,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Typography
        variant={size === 'small' ? 'caption' : ''}
        color={type === 'primary' ? Colors.base_white : Colors.text_secondary}
        customStyles={[
          size === 'large' && styles.largeText,
          size === 'large' && type === 'primary' && styles.bold,
        ]}>
        {children}
      </Typography>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.system_grey_6,
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
  small: {
    height: 32,
    borderRadius: 4,
    paddingHorizontal: 12,
  },
  large: {
    height: 56,
    borderRadius: 8,
  },
  disabled: {
    backgroundColor: 'rgba(1, 222, 0, 0.3)',
  },
  smallText: {
    fontSize: 13,
    lineHeight: 20,
  },
  largeText: {
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
  },
  bold: {
    fontFamily: 'Pretendard-Bold',
  },
});

Button.defaultProps = {
  disabled: false,
  size: 'large',
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  children: PropTypes.any,
  customStyles: PropTypes.object,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
