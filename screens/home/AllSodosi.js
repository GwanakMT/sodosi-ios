import React, {useState} from 'react';
import Colors from '../../assets/theme/colors';
import ListItem from './ListItem';
import {StatusBar, View, Pressable, FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Typography} from '../../components/common';

function AllSodosi(props) {
  const [view, setView] = useState('popular');

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={() => (
            <View style={[styles.listHeader, styles.row]}>
              <View style={styles.row}>
                <Typography variant="caption" color={Colors.text_primary}>
                  전체
                </Typography>
                <Typography
                  variant="caption"
                  color={Colors.text_primary}
                  customStyles={styles.count}
                  bold>
                  56
                </Typography>
              </View>
              <View style={styles.order}>
                <Pressable onPress={() => setView('popular')}>
                  <Typography
                    variant="caption"
                    color={
                      view === 'popular'
                        ? Colors.text_primary
                        : Colors.text_secondary
                    }
                    bold={view === 'popular'}>
                    인기순
                  </Typography>
                </Pressable>
                <Typography
                  color={Colors.system_grey_2}
                  customStyles={{paddingHorizontal: 6}}>
                  |
                </Typography>
                <Pressable onPress={() => setView('recent')}>
                  <Typography
                    variant="caption"
                    color={
                      view === 'recent'
                        ? Colors.text_primary
                        : Colors.text_secondary
                    }
                    bold={view === 'recent'}>
                    최신순
                  </Typography>
                </Pressable>
              </View>
            </View>
          )}
          data={[
            {
              id: 0,
              name: '힙에 취하고 싶을 때',
              people: 34,
              moment: 50,
            },
            {
              id: 1,
              name: '동국대 새내기들 필수코스',
              people: 34,
              moment: 50,
            },
            {
              id: 2,
              name: '힙에 취하고 싶을 때',
              people: 34,
              moment: 50,
            },
            {
              id: 3,
              name: '동국대 새내기들 필수코스',
              people: 34,
              moment: 50,
            },
            {
              id: 4,
              name: '힙에 취하고 싶을 때',
              people: 34,
              moment: 50,
            },
            {
              id: 5,
              name: '동국대 새내기들 필수코스',
              people: 34,
              moment: 50,
            },
            {
              id: 6,
              name: '힙에 취하고 싶을 때',
              people: 34,
              moment: 50,
            },
            {
              id: 7,
              name: '동국대 새내기들 필수코스',
              people: 34,
              moment: 50,
            },
            {
              id: 8,
              name: '힙에 취하고 싶을 때',
              people: 34,
              moment: 50,
            },
            {
              id: 9,
              name: '동국대 새내기들 필수코스',
              people: 34,
              moment: 50,
            },
          ]}
          renderItem={({item, i}) => (
            <ListItem
              index={i}
              data={item}
              isShowRank={false}
              isShowBookmark={true}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
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
  listHeader: {
    paddingTop: 14,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  order: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    paddingLeft: 4,
  },
  separator: {
    backgroundColor: Colors.system_grey_6,
    height: 1,
  },
});

export default AllSodosi;
