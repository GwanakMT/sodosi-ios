import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet} from 'react-native';

function Typography(props) {
  const {variant, bold, align, color, customStyles, children} = props;

  return (
    <Text
      style={[
        styles.typography,
        variant === 'hugeTitle1' && styles.hugeTitle1,
        variant === 'hugeTitle2' && styles.hugeTitle2,
        variant === 'largeTitle' && styles.largeTitle,
        variant === 'title1' && styles.title1,
        variant === 'title2' && styles.title2,
        variant === 'title3' && styles.title3,
        variant === 'headline' && styles.headline,
        variant === 'callout' && styles.callout,
        variant === 'subheadline' && styles.subheadline,
        variant === 'body' && styles.body,
        variant === 'caption' && styles.caption,
        bold &&
          (variant === 'callout' ||
          variant === 'subheadline' ||
          variant === 'body' ||
          variant === 'caption'
            ? styles.semiBold
            : styles.bold),
        align === 'left' && styles.left,
        align === 'center' && styles.center,
        align === 'right' && styles.right,
        {color: color},
        customStyles,
      ]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  typography: {
    fontFamily: 'Pretendard-Regular',
  },
  hugeTitle1: {
    fontSize: 56,
    lineHeight: 84,
    letterSpacing: 0.25,
  },
  hugeTitle2: {
    fontSize: 50,
    lineHeight: 75,
    letterSpacing: 0.25,
  },
  largeTitle: {
    fontSize: 34,
    lineHeight: 42,
    letterSpacing: 0.374,
  },
  title1: {
    fontSize: 26,
    lineHeight: 36,
    letterSpacing: 0.364,
  },
  title2: {
    fontSize: 22,
    lineHeight: 32,
  },
  title3: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.38,
  },
  headline: {
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.32,
    fontFamily: 'Pretendard-Bold',
    // fontFeatureSettings: 'ss03' on,
  },
  callout: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.32,
  },
  subheadline: {
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
  },
  body: {
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: -0.408,
  },
  caption: {
    fontSize: 13,
    lineHeight: 20,
  },
  semiBold: {
    fontFamily: 'Pretendard-SemiBold',
  },
  bold: {
    fontFamily: 'Pretendard-bold',
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});

Typography.defaultProps = {
  bold: false,
  align: 'left',
};

Typography.propTypes = {
  variant: PropTypes.string,
  bold: PropTypes.bool,
  align: PropTypes.string,
  color: PropTypes.string,
  customStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.any,
};

export default Typography;
