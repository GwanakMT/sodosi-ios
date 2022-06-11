import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import Colors from '../../assets/theme/colors';
import {Pressable, StyleSheet} from 'react-native';
import Typography from './Typography';

function Button(props) {
  const {type, size, textColor, children, customStyles, disabled, onPress} =
    props;

  const color = useMemo(() => {
    if (textColor) {
      return textColor;
    } else if (type === 'primary') {
      return Colors.base_white;
    } else if (type === 'secondary') {
      return Colors.green_600;
    } else {
      return Colors.text_secondary;
    }
  }, [textColor, type]);

  return (
    <Pressable
      style={[
        styles.button,
        type === 'primary' && styles.primary,
        type === 'secondary' && styles.secondary,
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
        color={color}
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
    backgroundColor: Colors.green_600,
    lineHeight: 24,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.green_600,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.system_grey_6,
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
  textColor: PropTypes.string,
  children: PropTypes.any,
  customStyles: PropTypes.object,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
