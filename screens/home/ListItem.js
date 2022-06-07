import React from 'react';
import PropTypes from 'prop-types';
import Colors from '../../assets/theme/colors';
import BookmarkIcon from '../../assets/images/icon/bookmark.svg';
import {View, StyleSheet} from 'react-native';
import {Typography, Checkbox} from '../../components/common';

function ListItem(props) {
  const {key, index, data, hasRank, hasCheckbox, hasBookmark, onClickCheckbox} =
    props;
  return (
    <>
      <View style={styles.sodosiItem} key={key}>
        <View style={styles.itemContent}>
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
          <View style={styles.img}>
            <Typography>🐥</Typography>
          </View>
          <View>
            <Typography variant="callout" color={Colors.text_primary} bold>
              {data.name}
            </Typography>
            <View style={styles.description}>
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
  );
}

const styles = StyleSheet.create({
  sodosiItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rank: {
    marginRight: 10,
  },
  checkbox: {
    marginRight: 16,
  },
  img: {
    width: 72,
    height: 72,
    backgroundColor: Colors.system_grey_6,
    borderRadius: 37,
    marginRight: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    flexDirection: 'row',
    paddingTop: 4,
  },
  separator: {
    paddingHorizontal: 6,
  },
});

ListItem.defaultProps = {};

ListItem.propTypes = {
  key: PropTypes.any,
  index: PropTypes.number,
  data: PropTypes.object,
  hasRank: PropTypes.bool,
  hasCheckbox: PropTypes.bool,
  hasBookmark: PropTypes.bool,
  onClickCheckbox: PropTypes.func,
};

export default ListItem;
