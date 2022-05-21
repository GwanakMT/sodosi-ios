import React from 'react';
import Colors from '../../assets/theme/colors';
import BookmarkIcon from '../../assets/images/icon/bookmark.svg';
import {View, StyleSheet} from 'react-native';
import {Typography} from '../../components/common';

function ListItem(props) {
  const {key, index, data, isShowRank, isShowBookmark} = props;
  return (
    <>
      <View style={styles.sodosiItem} key={key}>
        <View style={styles.itemContent}>
          {isShowRank && (
            <Typography
              variant="callout"
              color={Colors.text_tertiary}
              customStyles={styles.rank}
              bold>
              {index + 1}
            </Typography>
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
                customStyles={{paddingHorizontal: 6}}>
                |
              </Typography>
              <Typography variant="caption" color={Colors.system_grey_2}>
                {data.moment}개의 순간
              </Typography>
            </View>
          </View>
        </View>
        {isShowBookmark && (
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
});

export default ListItem;
