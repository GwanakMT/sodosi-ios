import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Colors from '../../assets/theme/colors';
import ListItem from './ListItem';
import AddIcon from '../../assets/images/icon/add.svg';
import {StatusBar, View, Pressable, FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Typography} from '../../components/common';

function InterestedSodosi(props) {
  const {
    isAdd,
    setAdd,
    isModify,
    setModify,
    interestedSodosiList,
    setInterestedSodosiList,
  } = props;

  const [data, setData] = useState([
    {
      id: 0,
      name: '올빼미들을 위한 새벽 바이브',
      people: 34,
      moment: 50,
      selected: false,
    },
    {
      id: 1,
      name: '동국대 새내기들 필수코스',
      people: 34,
      moment: 50,
      selected: false,
    },
  ]);

  useEffect(() => {
    return _ => {
      setAdd(false);
      setModify(false);
      setInterestedSodosiList([]);
    };
  }, [setAdd, setInterestedSodosiList, setModify]);

  useEffect(() => {
    setInterestedSodosiList(data);
  }, [data, setInterestedSodosiList]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <FlatList
          data={interestedSodosiList}
          renderItem={({item, i}) => (
            <ListItem
              index={i}
              data={item}
              hasCheckbox={isModify}
              hasBookmark={isAdd}
              onClickCheckbox={() => {
                const index = interestedSodosiList.findIndex(
                  sodosi => sodosi.id === item.id,
                );
                if (index > -1) {
                  const _interestedSodosiList =
                    _.cloneDeep(interestedSodosiList);
                  _interestedSodosiList[index].selected =
                    !_interestedSodosiList[index].selected;
                  setInterestedSodosiList(_interestedSodosiList);
                }
              }}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            !isAdd &&
            !isModify && (
              <Pressable
                onPress={() => {
                  setAdd(true);
                }}>
                <View style={styles.addItem}>
                  <View style={styles.circle}>
                    <AddIcon color={Colors.green_600} />
                  </View>
                  <Typography color={Colors.text_secondary} bold>
                    관심 소도시 추가하기
                  </Typography>
                </View>
              </Pressable>
            )
          }
        />
        {isAdd && (
          <Button type="primary" onPress={() => setAdd(false)}>
            완료
          </Button>
        )}
        {isModify && <Button type="outlined">삭제</Button>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.base_white,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.base_white,
    paddingHorizontal: 20,
  },
  separator: {
    backgroundColor: Colors.system_grey_6,
    height: 1,
  },
  addItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.system_grey_5,
    borderRadius: 37,
    marginRight: 14,
  },
});

InterestedSodosi.defaultProps = {};

InterestedSodosi.propTypes = {
  isAdd: PropTypes.bool,
  setAdd: PropTypes.func,
  isModify: PropTypes.bool,
  setModify: PropTypes.func,
  interestedSodosiList: PropTypes.array,
  setInterestedSodosiList: PropTypes.func,
};

export default InterestedSodosi;
