import React from 'react'
import PropTypes from 'prop-types'
import BookmarkIcon from '../../assets/images/icon/bookmark.svg'
import { GlobalStyles, Colors } from '../../assets/theme'
import { View, StyleSheet } from 'react-native'
import { Typography, Checkbox } from '../../components/common'

function ListItem(props) {
  const {
    key,
    index,
    data,
    hasRank,
    hasCheckbox,
    hasBookmark,
    onClickCheckbox
  } = props

  return (
    <>
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.flexSpaceBetween,
          GlobalStyles.centerVertical,
          styles.sodosiItem
        ]}
        key={key}>
        <View style={[GlobalStyles.flexRow, GlobalStyles.centerVertical]}>
          {hasRank && (
            <Typography
              variant="callout"
              color={Colors.text_tertiary}
              customStyles={styles.rank}
              bold>
              {index + 1}
            </Typography>
          )}
          {hasCheckbox && (
            <Checkbox
              boxType={'circle'}
              active={data.selected}
              customStyles={styles.checkbox}
              onPress={onClickCheckbox}
            />
          )}
          <View style={[GlobalStyles.center, styles.img]}>
            <Typography>🐥</Typography>
          </View>
          <View>
            <Typography variant="callout" color={Colors.text_primary} bold>
              {data.name}
            </Typography>
            <View style={GlobalStyles.flexRow}>
              <Typography variant="caption" color={Colors.system_grey_2}>
                {data.people}명의 소시민들
              </Typography>
              <Typography
                variant="caption"
                color={Colors.system_grey_2}
                customStyles={styles.separator}>
                |
              </Typography>
              <Typography variant="caption" color={Colors.system_grey_2}>
                {data.moment}개의 순간
              </Typography>
            </View>
          </View>
        </View>
        {hasBookmark && (
          <View>
            <BookmarkIcon />
          </View>
        )}
      </View>
      {/* <View style={styles.separator} /> */}
    </>
  )
}

const styles = StyleSheet.create({
  sodosiItem: {
    paddingVertical: 20
  },
  rank: {
    marginRight: 10
  },
  checkbox: {
    marginRight: 16
  },
  img: {
    width: 72,
    height: 72,
    backgroundColor: Colors.system_grey_6,
    borderRadius: 37,
    marginRight: 14
  },
  description: {
    paddingTop: 4
  },
  separator: {
    paddingHorizontal: 6
  }
})

ListItem.defaultProps = {}

ListItem.propTypes = {
  key: PropTypes.any,
  index: PropTypes.number,
  data: PropTypes.object,
  hasRank: PropTypes.bool,
  hasCheckbox: PropTypes.bool,
  hasBookmark: PropTypes.bool,
  onClickCheckbox: PropTypes.func
}

export default ListItem
