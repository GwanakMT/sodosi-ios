import React from 'react'
import PropTypes from 'prop-types'
import Svg, { Path } from 'react-native-svg'
import { Colors } from '../../assets/theme'

export default function Icons(props) {
  const { id, width, height, viewBox, color, fill, customStyles, ...rest } = props

  const mapping = {
    warning: (
      <>
        <Path
          d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
          stroke={Colors.system_tint_pink}
          stroke-width="1.33333"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M7.9668 10.3H8.03346V10.3667H7.9668V10.3Z"
          stroke={Colors.system_tint_pink}
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8 5.6333V8.29997"
          stroke={Colors.system_tint_pink}
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </>
    ),
    bookmark: (
      <Path
        d="M17 4H7C6.44772 4 6 4.44772 6 5V20.1315C6 20.9302 6.89014 21.4066 7.5547 20.9635L11.4453 18.3698C11.7812 18.1459 12.2188 18.1459 12.5547 18.3698L16.4453 20.9635C17.1099 21.4066 18 20.9302 18 20.1315V5C18 4.44772 17.5523 4 17 4Z"
        stroke={color}
        fill={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    'back-arrow': (
      <>
        <Path
          d="M21 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11V13ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L3 11ZM21 11L3 11L3 13L21 13V11Z"
          fill={Colors.base_black}
        />
        <Path
          d="M7.29289 17.7071C7.68342 18.0976 8.31658 18.0976 8.70711 17.7071C9.09763 17.3166 9.09763 16.6834 8.70711 16.2929L7.29289 17.7071ZM3 12L2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L3 12ZM8.70711 7.70711C9.09763 7.31658 9.09763 6.68342 8.70711 6.29289C8.31658 5.90237 7.68342 5.90237 7.29289 6.29289L8.70711 7.70711ZM8.70711 16.2929L3.70711 11.2929L2.29289 12.7071L7.29289 17.7071L8.70711 16.2929ZM3.70711 12.7071L8.70711 7.70711L7.29289 6.29289L2.29289 11.2929L3.70711 12.7071Z"
          fill={Colors.base_black}
        />
      </>
    ),
    'right-arrow': (
      <Path
        d="M6.4714 2.86192C6.21105 2.60157 5.78895 2.60157 5.5286 2.86192C5.26825 3.12227 5.26825 3.54438 5.5286 3.80473L6.4714 2.86192ZM10.6667 8L11.1381 8.4714C11.3984 8.21105 11.3984 7.78894 11.1381 7.52859L10.6667 8ZM5.5286 12.1953C5.26825 12.4556 5.26825 12.8777 5.5286 13.1381C5.78895 13.3984 6.21105 13.3984 6.4714 13.1381L5.5286 12.1953ZM5.5286 3.80473L10.1953 8.4714L11.1381 7.52859L6.4714 2.86192L5.5286 3.80473ZM10.1953 7.52859L5.5286 12.1953L6.4714 13.1381L11.1381 8.4714L10.1953 7.52859Z"
        fill={color}
      />
    )
  }

  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      style={{
        verticalAlign: 'middle',
        ...customStyles
      }}
      {...rest}>
      {mapping[id]}
    </Svg>
  )
}

Icons.defaultProps = {
  viewBox: '0 0 24 24',
  width: 18,
  height: 18,
  hover: 'pointer'
}

Icons.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
  color: PropTypes.string,
  fill: PropTypes.string,
  customStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
