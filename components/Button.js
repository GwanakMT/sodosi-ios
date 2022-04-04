import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

function Button(props) {
  const {type, title, customStyles, onPress} = props;

  return (
    <Pressable
      style={[
        styles.button,
        type === 'primary' && styles.primary,
        type === 'outlined' && styles.outlined,
        customStyles,
      ]}
      onPress={onPress}>
      <Text style={[styles.text, type === 'primary' && styles.bold]}>
        {title}
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
  text: {
    fontSize: 16,
    color: 'white',
  },
  bold: {
    fontFamily: 'Pretendard-Bold',
  },
});

export default Button;
