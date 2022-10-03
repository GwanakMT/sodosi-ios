import React from 'react';
import {Colors} from '../assets/theme';
import {Map} from 'immutable';
import {BaseToast} from 'react-native-toast-message';

const common = Map({
  toastConfig: {
    success: props => (
      <BaseToast
        {...props}
        style={{
          borderLeftWidth: 0,
          borderRadius: 8,
          backgroundColor: Colors.base_black,
          height: 48,
        }}
        contentContainerStyle={{
          paddingVertical: 13,
          paddingHorizontal: 16,
        }}
        text1Style={{
          fontSize: 14,
          fontWeight: '400',
          color: Colors.base_white,
        }}
      />
    ),
  },
});

export default common;
