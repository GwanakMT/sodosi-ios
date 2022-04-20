import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Colors from '../../assets/theme/colors';
import CheckIcon from '../../assets/images/icon/check.svg';
import {Pressable, StyleSheet} from 'react-native';

function Checkbox(props) {
  const {boxType} = props;

  const [active, setActive] = useState(false);

  return (
    <Pressable
      boxType={boxType}
      style={[
        styles.checkbox,
        active && styles.active,
        boxType === 'circle' && styles.circle,
      ]}
      onPress={() => setActive(!active)}>
      <CheckIcon color={active ? Colors.base_white : Colors.system_grey_5} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.system_grey_5,
    borderRadius: 8,
  },
  active: {
    borderWidth: 0,
    backgroundColor: Colors.green_600,
  },
  circle: {
    borderRadius: 30,
  },
});

Checkbox.defaultProps = {
  boxType: 'square',
};

Checkbox.propTypes = {
  value: PropTypes.string,
  boxType: PropTypes.string,
  onPress: PropTypes.func,
};

export default Checkbox;
