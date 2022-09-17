import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerJustify: {
    justifyContent: 'center',
  },
  flexSpaceBetween: {
    justifyContent: 'space-between',
  },
  flex_end: {
    justifyContent: 'flex-end',
  },
  flexStartVertical: {
    alignItems: 'flex-start',
  },
  centerVertical: {
    alignItems: 'center',
  },
  flexEndVertical: {
    alignItems: 'flex-end',
  },
  none: {
    display: 'none',
  },
});

export default globalStyles;
