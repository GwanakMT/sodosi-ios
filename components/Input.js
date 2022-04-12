import React from 'react';
import PropTypes from 'prop-types';
import Colors from '../assets/theme/colors';
import {TextInput, StyleSheet} from 'react-native';

function Input(props) {
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
    onPress,
  } = props;

  return (
    <TextInput
      value={value}
      defaultValue={defaultValue}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={Colors.text_tertiary}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      selectionColor={Colors.system_tint_blue}
      style={[styles.input, isError && styles.error, customStyles]}
      onSubmitEditing={onPress}
      returnKeyType={returnKeyType}
      editable={editable}
      autoFocus={autoFocus}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 52,
    fontSize: 18,
    color: Colors.text_primary,
    lineHeight: 24,
    letterSpacing: -0.408,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    fontFamily: 'Pretendard-Bold',
  },
  error: {
    borderWidth: 1,
    borderColor: Colors.system_tint_pink,
    backgroundColor: '#FFF5F7',
  },
});

Input.defaultProps = {
  isError: false,
  secureTextEntry: false,
  returnKeyType: 'done',
};

Input.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  editable: PropTypes.bool,
  customStyles: PropTypes.object,
  isError: PropTypes.bool,
  autoFocus: PropTypes.bool,
  returnKeyType: PropTypes.string,
  onPress: PropTypes.func,
};

export default Input;
