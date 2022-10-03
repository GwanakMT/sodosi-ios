import React from 'react';
import PropTypes from 'prop-types';
import Svg, {Path} from 'react-native-svg';

export default function Icons(props) {
  const {id, width, height, viewBox, color, customStyles, rest} = props;

  const mapping = {
    warning: (
      <>
        <Path
          d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
          stroke="#FF2D55"
          stroke-width="1.33333"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M7.9668 10.3H8.03346V10.3667H7.9668V10.3Z"
          stroke="#FF2D55"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8 5.6333V8.29997"
          stroke="#FF2D55"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </>
    ),
    'right-arrow': (
      <Path
        d="M6.4714 2.86192C6.21105 2.60157 5.78895 2.60157 5.5286 2.86192C5.26825 3.12227 5.26825 3.54438 5.5286 3.80473L6.4714 2.86192ZM10.6667 8L11.1381 8.4714C11.3984 8.21105 11.3984 7.78894 11.1381 7.52859L10.6667 8ZM5.5286 12.1953C5.26825 12.4556 5.26825 12.8777 5.5286 13.1381C5.78895 13.3984 6.21105 13.3984 6.4714 13.1381L5.5286 12.1953ZM5.5286 3.80473L10.1953 8.4714L11.1381 7.52859L6.4714 2.86192L5.5286 3.80473ZM10.1953 7.52859L5.5286 12.1953L6.4714 13.1381L11.1381 8.4714L10.1953 7.52859Z"
        fill={color}
      />
    ),
  };

  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      style={{
        verticalAlign: 'middle',
        ...customStyles,
      }}
      {...rest}>
      {mapping[id]}
    </Svg>
  );
}

Icons.defaultProps = {
  viewBox: '0 0 24 24',
  width: 18,
  height: 18,
  hover: 'pointer',
};

Icons.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
  hover: PropTypes.string,
  fill: PropTypes.any,
  customStyles: PropTypes.object,
};
